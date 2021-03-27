import { Status } from "../mod.ts";

// 400
export class BadRequest extends Error {
  stausCode: number;
  name: string;

  constructor(msg: string) {
    super()
    this.stausCode = Status.BadRequest;
    this.name = msg;
  }
}

// 401
export class Unauthorized extends Error {
  stausCode: number;
  name: string;

  constructor(msg: string) {
    super()
    this.stausCode = Status.Unauthorized;
    this.name = msg;
  }
}

// 403
export class Forbidden extends Error {
  stausCode: number;
  name: string;

  constructor(msg: string) {
    super()
    this.stausCode = Status.Forbidden;
    this.name = msg;
  }
}

// 404
export class NotFound extends Error {
  stausCode: number;
  name: string;

  constructor(msg: string) {
    super()
    this.stausCode = Status.NotFound;
    this.name = msg;
  }
}

// 409
export class Conflict extends Error {
  stausCode: number;
  name: string;

  constructor(msg: string) {
    super()
    this.stausCode = Status.Conflict;
    this.name = msg;
  }
}

// 500
export class InternalServerError extends Error {
  stausCode: number;
  name: string;

  constructor(msg: string) {
    super()
    this.stausCode = Status.InternalServerError;
    this.name = msg;
  }
}