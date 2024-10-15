import { NextFunction, Request, Response } from "express";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { ZodError } from "zod";
import { HttpException } from "@errors";

const errorHandler = (
  error: HttpException,
  _: Request,
  res: Response,
  next: NextFunction
) => {
  if (!error) return next();

  res.locals.status = error.status || 500;
  res.locals.message = error.message || "Server Error";

  if (error instanceof ZodError) {
    res.locals.status = 400;
    res.locals.message = error.issues.map((issue) => issue.message).join(", ");
  }

  if (error instanceof PrismaClientKnownRequestError) {
    res.locals.status = 400;
    res.locals.message = error.meta;
  }

  return next();
};

export default errorHandler;
