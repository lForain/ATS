import "jest-extended";
import { Mockgoose } from "mock-mongoose";
import * as mongoose from "mongoose";
import reasonController from "../../controllers/reason.controller";
import { ReasonType } from "../../models/reason.model";

const MockExpressRequest = require("mock-express-request");
const MockExpressResponse = require("mock-express-response");

const mockgoose: Mockgoose = new Mockgoose(mongoose);

mockgoose.prepareStorage()
  .then(() => {
    mongoose.connect("mongodb://db:27017/OMT");
  });

describe("index", () => {
  describe("when Reason Create Post route was called", () => {
    it("should return status false when description is null", async () => {
      const req = new MockExpressRequest({ body: { reasonDescription: null } });
      const res = new MockExpressResponse();

      await reasonController.create(req, res);
      const result = res._getJSON();

      expect(result.status).toBe(false);
    });

    it("should return status false when description isn't longer than two words", async () => {
      const req = new MockExpressRequest({ body: { reasonDescription: "word" } });
      const res = new MockExpressResponse();
      const req2 = new MockExpressRequest({ body: { reasonDescription: "two words " } });
      const res2 = new MockExpressResponse();
      const req3 = new MockExpressRequest({ body: { reasonDescription: "three words here" } });
      const res3 = new MockExpressResponse();
      const req4 = new MockExpressRequest({ body: { reasonDescription: "four words here bro" } });
      const res4 = new MockExpressResponse();

      await reasonController.create(req, res);
      const result = res._getJSON();
      await reasonController.create(req2, res2);
      const result2 = res2._getJSON();
      await reasonController.create(req3, res3);
      const result3 = res3._getJSON();
      await reasonController.create(req4, res4);
      const result4 = res4._getJSON();

      expect(result.status).toBe(false);
      expect(result2.status).toBe(false);
      expect(result3.status).toBe(true);
      expect(result4.status).toBe(true);
    });
  });

  describe("when Reason Read Get route was called", () => {
    it("should return all the ReasonType objects instanced when the request dont got an object", async () => {
      const req = new MockExpressRequest();
      const res = new MockExpressResponse();

      await reasonController.read(req, res);
      const result = res._getJSON();

      expect(result.data.length).toBe(2);
      expect(result.data[0]).toContainKeys(["reasonDescription", "_id", "__v"]);
    });
    it("should return ReasonType object(s) that matches the request parameter", async () => {
      const req = new MockExpressRequest({ body: { reasonDescription: "three words here" } });
      const res = new MockExpressResponse();

      await reasonController.read(req, res);
      const result = res._getJSON();

      for (const ret of result.data) {
        expect(ret).toContainEntry(["reasonDescription", "three words here"]);
      }
    });
  });
});
