import 'jest-extended';
import { Mockgoose } from 'mock-mongoose';
import * as mongoose from 'mongoose';
import reasonController from '../../controllers/reason.controller';
import { ReasonModel } from '../../models/reason.model';

const MockExpressRequest = require('mock-express-request');
const MockExpressResponse = require('mock-express-response');

const mockgoose: Mockgoose = new Mockgoose(mongoose);

mockgoose.prepareStorage()
  .then(() => {
    mongoose.connect('mongodb://db:27017/OMT');
  });

let idAux = null;

describe('index', () => {
  describe('when Reason Create Post route was called', () => {
    it('should return status false and the respective error message when request description is null', async () => {
      const req = new MockExpressRequest({ body: { reasonDescription: null } });
      const res = new MockExpressResponse();

      await reasonController.create(req, res);
      const result = res._getJSON();

      expect(result.status).toBe(false);
      expect(result.message).toInclude("Description does not contain a text value or isn't longer than two words");
    });

    it("should return status false and a message when description isn't longer than two words", async () => {
      const req = new MockExpressRequest({ body: { reasonDescription: 'word' } });
      const res = new MockExpressResponse();
      const req2 = new MockExpressRequest({ body: { reasonDescription: 'two words ' } });
      const res2 = new MockExpressResponse();

      await reasonController.create(req, res);
      const result = res._getJSON();
      await reasonController.create(req2, res2);
      const result2 = res2._getJSON();

      expect(result.status).toBe(false);
      expect(result.message).toInclude("Description does not contain a text value or isn't longer than two words");

      expect(result2.status).toBe(false);
      expect(result2.message).toInclude("Description does not contain a text value or isn't longer than two words");
    });

    it('should return status true with the respective message when it is a valid description', async () => {
      const req = new MockExpressRequest({ body: { reasonDescription: 'three words here' } });
      const res = new MockExpressResponse();
      const req2 = new MockExpressRequest({ body: { reasonDescription: 'four words here bro' } });
      const res2 = new MockExpressResponse();

      await reasonController.create(req, res);
      const result = res._getJSON();
      await reasonController.create(req2, res2);
      const result2 = res2._getJSON();

      expect(result.status).toBe(true);
      expect(result.message).toInclude('Reason sucessfully created');
      for (const reason of result.data) {
        expect(reason).toContainKeys([ '_id', '__v' , 'reasonDescription']);
      }

      expect(result2.status).toBe(true);
      expect(result2.message).toInclude('Reason sucessfully created');
      for (const reason of result.data) {
        expect(reason).toContainKeys([ '_id', '__v' , 'reasonDescription']);
      }
    });

    it('should return status false and a message when ReasonModel throws an exception', async () => {
      const req = new MockExpressRequest({ body: { reasonDescription: "don't find me", newReason: 'new reason' } });
      const res = new MockExpressResponse();
      const spy = jest.spyOn(ReasonModel, 'create').mockImplementation(() => {
        throw new Error('Custom Error');
      });

      await reasonController.create(req, res);
      const result = res._getJSON();

      expect(spy).toBeCalled();
      expect(result.status).toBe(false);
      expect(result.message).toInclude('Custom Error');

      spy.mockRestore();
    });
  });

  describe('when Reason Read Get route was called', () => {
    it('should return all the ReasonType objects instanced, status true and a message when the request dont got an object', async () => {
      const req = new MockExpressRequest();
      const res = new MockExpressResponse();

      await reasonController.read(req, res);
      const result = res._getJSON();

      expect(result.status).toBe(true);
      expect(result.message).toInclude('Reason(s) were successfully returned');
      for (const reason of result.data) {
        expect(reason).toContainKeys(['reasonDescription', '_id', '__v']);
      }
    });

    it('should return status true, a message and the reasons that got the match when it occurs', async () => {
      const req = new MockExpressRequest({ body: { reasonDescription: 'three words here' } });
      const res = new MockExpressResponse();

      await reasonController.read(req, res);
      const result = res._getJSON();

      expect(result.status).toBe(true);
      expect(result.message).toInclude('Reason(s) were successfully returned');
      for (const reason of result.data) {
        expect(reason).toContainKeys(['reasonDescription', '_id', '__v']);
      }
      for (const reason of result.data) {
        expect(reason).toContainEntry(['reasonDescription', 'three words here']);
      }
    });

    it('should return status false and the respective message when no reason is found', async () => {
      const req = new MockExpressRequest({ body: { reasonDescription: 'unexpected reason description' } });
      const res = new MockExpressResponse();

      await reasonController.read(req, res);
      const result = res._getJSON();

      expect(result.message).toInclude("There isn't any reason with this description");
      expect(result.status).toBe(false);
    });

    it('should return status false and a message when ReasonModel throws an exception', async () => {
      const req = new MockExpressRequest({ body: { reasonDescription: "don't find me", newReason: 'new reason' } });
      const res = new MockExpressResponse();
      const spy = jest.spyOn(ReasonModel, 'find').mockImplementation(() => {
        throw new Error('Custom Error');
      });

      await reasonController.read(req, res);
      const result = res._getJSON();

      expect(spy).toBeCalled();
      expect(result.status).toBe(false);
      expect(result.message).toInclude('Custom Error');

      spy.mockRestore();
    });
  });

  describe('when Reason Update Put route was called', () => {
    it("should return status false when there isn't any ReasonType object that contain the filter", async () => {
      const req = new MockExpressRequest({ body: { reasonDescription: "don't find me", newReason: 'new reason' } });
      const res = new MockExpressResponse();

      await reasonController.update(req, res);
      const result = res._getJSON();

      expect(result.status).toBe(false);
      expect(result.message).toInclude('No reason to update match your request filter');
    });

    it('should return true and and the query with a message when a match/update occurs', async () => {
      const req = new MockExpressRequest({ body: { reasonDescription: 'three words here', newReason: 'new reason' } });
      const res = new MockExpressResponse();

      await reasonController.update(req, res);
      const result = res._getJSON();

      expect(result.status).toBe(true);
      expect(result.message).toInclude('Reason sucessfully updated');
      expect(result.data).toContainKeys(['n', 'nModified', 'ok']);
      const req2 = new MockExpressRequest();
      const res2 = new MockExpressResponse();

      await reasonController.read(req2, res2);
      const result2 = res2._getJSON();
      idAux = result2.data[0]._id;
    });

    it('should return status false and a message when ReasonModel throws an exception', async () => {
      const req = new MockExpressRequest({ body: { reasonDescription: "don't find me", newReason: 'new reason' } });
      const res = new MockExpressResponse();
      const spy = jest.spyOn(ReasonModel, 'updateOne').mockImplementation(() => {
        throw new Error('Custom Error');
      });

      await reasonController.update(req, res);
      const result = res._getJSON();

      expect(spy).toBeCalled();
      expect(result.status).toBe(false);
      expect(result.message).toInclude('Custom Error');

      spy.mockRestore();
    });
  });

  describe('when Reason Delete route was called', () => {
    it("should return status false when there isn't any ReasonType object that matches the request", async () => {
      const req = new MockExpressRequest({ body: { reasonDescription: "don't find me" } });
      const res = new MockExpressResponse();

      await reasonController.delete(req, res);
      const result = res._getJSON();

      expect(result.status).toBe(false);
      expect(result.message).toInclude('No reason to delete match your request');
    });

    it('should return status true and the query with a message, when a match/delete occurs', async () => {
      const req = new MockExpressRequest({ body: { _id: idAux } });
      const res = new MockExpressResponse();

      await reasonController.delete(req, res);
      const result = res._getJSON();

      expect(result.status).toBe(true);
      expect(result.message).toInclude('Reason sucessfully deleted');
    });

    it('should return status false and a message when ReasonModel throws an exception', async () => {
      const req = new MockExpressRequest({ body: { _id: idAux } });
      const res = new MockExpressResponse();
      const spy = jest.spyOn(ReasonModel, 'updateOne').mockImplementation(() => {
        throw new Error('Custom Error');
      });

      await reasonController.update(req, res);
      const result = res._getJSON();

      expect(spy).toBeCalled();
      expect(result.status).toBe(false);
      expect(result.message).toInclude('Custom Error');

      spy.mockRestore();
    });
  });
});
