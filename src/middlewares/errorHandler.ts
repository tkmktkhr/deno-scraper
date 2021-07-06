import { Context, isHttpError, Status } from "../mod.ts";
import { CustomError } from "../common/error.ts";
import { TResponse } from "../interfaces/responses/index.ts";

export const errorHandler = async (ctx: Context, next: () => Promise<void>) => {
  try {
    await next();
  } catch (err) {
    if (!isHttpError(err)) {
      ctx.response.status = err.code;
      ctx.response.body = createError(err);
    } else {
      // throw returns content-type: text/plain; charset=utf-8
      ctx.throw(Status.InternalServerError, "Unexpected Error");
    }
  }
};

type TErrorFormat = {
  code: number;
  name: string;
};

const createError = (err: CustomError): TResponse<TErrorFormat> => {
  return {
    data: {
      code: err.code,
      name: err.name,
    },
  };
};
