import { STATUS_TEXT } from "../mod.ts";

export class CustomError extends Error {
  code: number;
  name: string;
  contents: string[];

  constructor(statusCode: number, contents: string[]) {
    super();
    this.code = statusCode;
    this.name = STATUS_TEXT.get(statusCode);
    this.contents = contents;
  }
}

// Reference for future, [oak HttpError]https://github.com/oakserver/oak/blob/main/httpError.ts
