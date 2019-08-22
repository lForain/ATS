// import {Request, Response} from "supertest";
import { Mockgoose } from "mock-mongoose";
import * as mongoose from "mongoose";
import * as request from "supertest";
import * as response from "supertest";
import app from "../../config/express";
import controller from "../../controllers/reason.controller";
// import mongoose from "mongoose"
// import Mockgoose from "mock-mongoose".Mockgoose;
// const mockgoose = new Mockgoose(mongoose);
const MockExpressRequest = require("mock-express-request");
const MockExpressResponse = require("mock-express-response");

const mockgoose: Mockgoose = new Mockgoose(mongoose);

mockgoose.prepareStorage()
  .then(() => {
    mongoose.connect("mongodb://db:27017/OMT");
  });

// const req = new MockExpressRequest({
//     body: {
//       reasonDescription: null,
//     }
//   });

// const resp = new MockExpressResponse();



describe("When function create was called", () => {
  it("Req cannot be null", async () => {

    const req = new MockExpressRequest({ body: { reasonDescription: null } });

    const res = new MockExpressResponse();

    await controller.create(req, res);

    
    const result = res._getJSON();
    
    // console.log(`result: ${JSON.stringify(result)}`);

    console.log(result);
    
    expect(res.statusCode).toBe(200);

    // const result2 =  await controller.create(req2, res2);
    // // const result = request(app).post("/reason");
    // console.log(`result: ${result}`);
    // expect(resp.statusCode).toBe(200);
    // expect(result2).toBe(false);
  });
});
