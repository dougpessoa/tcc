import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";
import { GenerateMongoURLProps } from "../types";

export function generateMongoURL({
  port,
  domain,
  user,
  password,
}: GenerateMongoURLProps) {
  return `mongodb://${user}:${password}@${domain}:${port}/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.2`;
}

export function errorListener(err: Error, request: Request, response: Response, next: NextFunction) {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: 'Desculpe, houve um erro interno no servidor.',
    err,
  });
}