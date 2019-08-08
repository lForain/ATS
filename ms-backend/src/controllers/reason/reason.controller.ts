import { Request, Response } from "express";

export default class ReasonController {
  public msg(req: Request, res: Response): void {
    res.json({ msg: "Hello!" });
  }
}

export const reasonController = new ReasonController();
