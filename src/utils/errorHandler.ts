import { ErrorRequestHandler, Request, Response } from "express";

export const errorHandler: ErrorRequestHandler = (
  err: Error,
  req: Request,
  res: Response
) => {
  return res.send("This is the error handler");
};
