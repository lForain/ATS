import { Mockgoose } from "mock-mongoose";
import * as mongoose from "mongoose";
import reasonController from "../../controllers/reason.controller";

const MockExpressRequest = require("mock-express-request");
const MockExpressResponse = require("mock-express-response");

const mockgoose: Mockgoose = new Mockgoose(mongoose);

mockgoose.prepareStorage()
  .then(() => {
    mongoose.connect("mongodb://db:27017/OMT");
  });

describe("index", () => {
  describe("when Reason Create Post route was called", () => {
    it("description paramenter cannot be null", async () => {
      const req = new MockExpressRequest({ body: { reasonDescription: null } });
      const res = new MockExpressResponse();

      await reasonController.create(req, res);
      const result = res._getJSON();

      expect(result.status).toBe(false);
    });

    it("description parameter must be a string", async () => {
      const req = new MockExpressRequest({ body: { reasonDescription: 1234 } });
      const res = new MockExpressResponse();

      await reasonController.create(req, res);

      const result = res._getJSON();

      console.log(result);

      expect(result.status).toBe(false);
    });
  });
});
