import { Request, Response } from "express";
import main from "./src/controllers/reason.controller";

const result = {
  data: [
    {
      _id: "5d52cc6b037411002180b82f",
      reasonDescription: "Put is working",
    },
  ],
  message: "Reason(s) sucessfully returned.",
  status: true,
}

describe("create", () => {
  describe("Req cannot be null", () => {
    const reasonController = new main();
    reasonController.create(result, response);
  })
})
