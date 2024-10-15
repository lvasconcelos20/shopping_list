import { Request, Response } from "express";

const requestHandler = (req: Request, res: Response) => {
  if (!res.locals.status) {
    res.status(404).json({
      message: "Route not found",
    });
    return;
  }
  res
    .status(res.locals.status)
    .json({ data: res.locals.data, message: res.locals.message });
};

export default requestHandler;
