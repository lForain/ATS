import 'jest-extended';
import { Mockgoose } from 'mock-mongoose';
import * as mongoose from 'mongoose';
import HHController from '../../controllers/happyhour.controller';
import { HHModel } from '../../models/happyhour.model';

const MockExpressRequest = require('mock-express-request');
const MockExpressResponse = require('mock-express-response');

const mockgoose: Mockgoose = new Mockgoose(mongoose);

mockgoose.prepareStorage()
  .then(() => {
    mongoose.connect('mongodb://db:27017/OMT');
  });

let idAux = null;

Date.now = jest.fn().mockReturnValue(new Date('September 04 2019 18:30'));

describe('index', () => {
  describe('when Happy Hour Create Post route was called', () => {
    it('should return status false and the respective error message when request description is null', async () => {
      const req = new MockExpressRequest({
        body: {
          description: null,
          eventDate: 'September 05 2019 18:30',
          local: 'voluntários da pátria',
          usersPresent: ['Forain', 'Tom', 'Bruno'],
        },
      });
      const res = new MockExpressResponse();

      await HHController.create(req, res);
      const result = res._getJSON();

      expect(result.status).toBe(false);
      expect(result.message).toInclude('Some error(s) found: Description does not contain a text value or isn`t longer than two words');
    });

    it('should return status false and a message when description isn`t longer than two words', async () => {
      const req = new MockExpressRequest({
        body: {
          description: 'word',
          eventDate: 'September 05 2019 18:30',
          local: 'voluntários da pátria',
          usersPresent: ['Forain', 'Tom', 'Bruno'],
        },
      });
      const req2 = new MockExpressRequest({
        body: {
          description: 'two words ',
          eventDate: 'September 05 2019 18:30',
          local: 'voluntários da pátria',
          usersPresent: ['Forain', 'Tom', 'Bruno'],
        },
      });
      const res = new MockExpressResponse();
      const res2 = new MockExpressResponse();

      await HHController.create(req, res);
      const result = res._getJSON();
      await HHController.create(req2, res2);
      const result2 = res2._getJSON();

      expect(result.status).toBe(false);
      expect(result.message).toInclude('Some error(s) found: Description does not contain a text value or isn`t longer than two words');

      expect(result2.status).toBe(false);
      expect(result2.message).toInclude('Some error(s) found: Description does not contain a text value or isn`t longer than two words');
    });

    it('should return status false and a message when the request dont got a valid local', async () => {
      const req = new MockExpressRequest({
        body: {
          description: 'word',
          eventDate: 'September 05 2019 18:30',
          local: 'a',
          usersPresent: ['Forain', 'Tom', 'Bruno'],
        },
      });
      const res = new MockExpressResponse();

      await HHController.create(req, res);
      const result = res._getJSON();

      expect(result.status).toBe(false);
      expect(result.message).toInclude('Insert a valid local name');
    });

    it('should return status true with the respective message when it is a valid happy hour', async () => {
      const req = new MockExpressRequest({
        body: {
          description: 'happy hour do forain',
          eventDate: 'September 05 2019 18:30',
          local: 'voluntários da pátria',
          usersPresent: ['Forain', 'Tom', 'Bruno'],
        },
      });
      const req2 = new MockExpressRequest({
        body: {
          description: 'happy hour do bruno',
          eventDate: 'October 05 2019 19:00',
          local: 'voluntários da pátria',
          usersPresent: [],
        },
      });
      const res = new MockExpressResponse();
      const res2 = new MockExpressResponse();

      await HHController.create(req, res);
      const result = res._getJSON();
      await HHController.create(req2, res2);
      const result2 = res2._getJSON();

      expect(result.status).toBe(true);
      expect(result.message).toInclude('Happy hour sucessfully created');
      for (const event of result.data) {
        expect(event).toContainKeys([
          '_id',
          '__v',
          'description',
          'local',
          'eventDate',
          'creationDate',
          'usersPresent']);
      }

      expect(result2.status).toBe(true);
      expect(result2.message).toInclude('Happy hour sucessfully created');
      for (const event of result.data) {
        expect(event).toContainKeys([
          '_id',
          '__v',
          'description',
          'local',
          'eventDate',
          'creationDate',
          'usersPresent']);
      }
    });

    it('should return status false and a message when already exists a happy hour scheduled to this date', async () => {
      const req = new MockExpressRequest({
        body: {
          description: 'happy hour foca alada',
          eventDate: 'September 05 2019 18:30',
          local: 'voluntários da pátria',
          usersPresent: ['Forain', 'Tom', 'Bruno'],
        },
      });
      const res = new MockExpressResponse();

      await HHController.create(req, res);
      const result = res._getJSON();

      expect(result.status).toBe(false);
      expect(result.message).toInclude('Already exists a happy hour scheculed to this date');
    });

    it('should return status false and a message when the description already exists', async () => {
      const req = new MockExpressRequest({
        body: {
          description: 'happy hour do forain',
          eventDate: 'December 05 2019 18:30',
          local: 'voluntários da pátria',
          usersPresent: ['Forain', 'Tom', 'Bruno'],
        },
      });
      const res = new MockExpressResponse();

      await HHController.create(req, res);
      const result = res._getJSON();

      expect(result.status).toBe(false);
      expect(result.message).toInclude('Already exists a happy hour with this description');
    });

    it('should return status false and a message when the date is before the actual date', async () => {
      const req = new MockExpressRequest({
        body: {
          description: 'happy hour foca alada',
          eventDate: 'May 05 2019 18:30',
          local: 'voluntários da pátria',
          usersPresent: ['Forain', 'Tom', 'Bruno'],
        },
      });
      const res = new MockExpressResponse();

      await HHController.create(req, res);
      const result = res._getJSON();

      expect(result.status).toBe(false);
      expect(result.message).toInclude('Some error(s) found: You should enter an event date that`s after the actual date');
    });

    it('should return status false and a message when HHModel throws an exception', async () => {
      const req = new MockExpressRequest({
        body: {
          description: 'happy hour do tom',
          eventDate: 'September 09 2019 18:30',
          local: 'voluntários da pátria',
          usersPresent: ['Forain', 'Tom', 'Bruno'],
        },
      });
      const res = new MockExpressResponse();
      const spy = jest.spyOn(HHModel, 'create').mockImplementation(() => {
        throw new Error('Custom Error');
      });

      await HHController.create(req, res);
      const result = res._getJSON();

      expect(spy).toBeCalled();
      expect(result.status).toBe(false);
      expect(result.message).toInclude('Custom Error');

      spy.mockRestore();
    });
  });

  describe('when Happy Hour Read Get route was called', () => {
    it('should return all HHType objects instanced, status true and a message when the request is empty', async () => {
      const req = new MockExpressRequest();
      const res = new MockExpressResponse();

      await HHController.read(req, res);
      const result = res._getJSON();

      expect(result.status).toBe(true);
      expect(result.message).toInclude('Happy hour(s) successfully returned');
      for (const event of result.data) {
        expect(event).toContainKeys([
          '_id',
          '__v',
          'description',
          'local',
          'eventDate',
          'creationDate',
          'usersPresent']);
      }
    });

    it('should return status true, a message and the happy hour(s) that got the match when it occurs', async () => {
      const req = new MockExpressRequest({ body: { description: 'happy hour do forain' } });
      const res = new MockExpressResponse();

      await HHController.read(req, res);
      const result = res._getJSON();

      expect(result.status).toBe(true);
      expect(result.message).toInclude('Happy hour(s) successfully returned');
      for (const event of result.data) {
        expect(event).toContainKeys([
          '_id',
          '__v',
          'description',
          'local',
          'eventDate',
          'creationDate',
          'usersPresent']);
      }
      for (const event of result.data) {
        expect(event).toContainEntry(['description', 'happy hour do forain']);
      }
    });

    it('should return status false and the respective message when no happy hour is found', async () => {
      const req = new MockExpressRequest({ body: { description: 'unexpected happy hour description' } });
      const res = new MockExpressResponse();

      await HHController.read(req, res);
      const result = res._getJSON();

      expect(result.message).toInclude('No happy hour found');
      expect(result.status).toBe(false);
    });

    it('should return status false and a message when HHModel throws an exception', async () => {
      const req = new MockExpressRequest({ body: { description: 'don`t find me' } });
      const res = new MockExpressResponse();
      const spy = jest.spyOn(HHModel, 'find').mockImplementation(() => {
        throw new Error('Custom Error');
      });

      await HHController.read(req, res);
      const result = res._getJSON();

      expect(spy).toBeCalled();
      expect(result.status).toBe(false);
      expect(result.message).toInclude('Custom Error');

      spy.mockRestore();
    });
  });

  describe('when Happy Hour Update Put route was called', () => {
    it('should return status false when there isn`t any HHType object that contain the filter', async () => {
      const req = new MockExpressRequest({
        body: {
          queryKey: 'description', queryValue: 'unexpected description',
          updateKey: 'usersPresent', updateValue: ['Forain', 'Santos']
        }
      });
      const res = new MockExpressResponse();

      await HHController.update(req, res);
      const result = res._getJSON();

      expect(result.status).toBe(false);
      expect(result.message).toInclude('No happy hour to update match your request filter');
    });

    it('should return true and and the query with a message when a match/update occurs', async () => {
      const req = new MockExpressRequest({
        body: {
          queryKey: 'description', queryValue: 'happy hour do bruno',
          updateKey: 'usersPresent', updateValue: ['Forain', 'Bruno'],
        },
      });
      const res = new MockExpressResponse();

      await HHController.update(req, res);
      const result = res._getJSON();

      expect(result.status).toBe(true);
      expect(result.message).toInclude('Happy hour sucessfully updated');
      expect(result.data).toContainKeys(['n', 'nModified', 'ok']);
      const req2 = new MockExpressRequest();
      const res2 = new MockExpressResponse();

      await HHController.read(req2, res2);
      const result2 = res2._getJSON();
      idAux = result2.data[0]._id;
    });

    it('should return status false and a message when HHModel throws an exception', async () => {
      const req = new MockExpressRequest({
        body: {
          queryKey: 'description', queryValue: 'happy hour do bruno',
          updateKey: 'usersPresent', updateValue: null,
        },
      });
      const res = new MockExpressResponse();
      const spy = jest.spyOn(HHModel, 'updateOne').mockImplementation(() => {
        throw new Error('Custom Error');
      });

      await HHController.update(req, res);
      const result = res._getJSON();

      expect(spy).toBeCalled();
      expect(result.status).toBe(false);
      expect(result.message).toInclude('Custom Error');

      spy.mockRestore();
    });
  });

  describe('when Happy Hour Delete route was called', () => {
    it('should return status false when there isn`t any HHType object that matches the request', async () => {
      const req = new MockExpressRequest({ body: { description: 'don`t find me' } });
      const res = new MockExpressResponse();

      await HHController.delete(req, res);
      const result = res._getJSON();

      expect(result.status).toBe(false);
      expect(result.message).toInclude('No happy hour to delete match your request');
    });

    it('should return status true and the query with a message, when a match/delete occurs', async () => {
      const req = new MockExpressRequest({ body: { _id: idAux } });
      const res = new MockExpressResponse();

      await HHController.delete(req, res);
      const result = res._getJSON();

      expect(result.status).toBe(true);
      expect(result.message).toInclude('Happy hour sucessfully deleted');
    });

    it('should return status false and a message when HHModel throws an exception', async () => {
      const req = new MockExpressRequest({ body: { _id: idAux } });
      const res = new MockExpressResponse();
      const spy = jest.spyOn(HHModel, 'updateOne').mockImplementation(() => {
        throw new Error('Custom Error');
      });

      await HHController.update(req, res);
      const result = res._getJSON();

      expect(spy).toBeCalled();
      expect(result.status).toBe(false);
      expect(result.message).toInclude('Custom Error');

      spy.mockRestore();
    });
  });
});
