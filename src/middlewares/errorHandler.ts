import { Context, isHttpError, Status } from "../mod.ts";

export const errorHandler = async (ctx: Context, next: () => Promise<void>) => {
  try {
    await next();
  } catch (err) {
    if (isHttpError(err)) {
      switch (err.status) {
        case Status.BadRequest:
          ctx.response.status = Status.BadRequest;
          ctx.response.body = createError(err);
          break;
        case Status.Unauthorized:
          ctx.response.status = Status.Unauthorized;
          ctx.response.body = createError(err);
          break;
        case Status.Forbidden:
          ctx.response.status = Status.Forbidden;
          ctx.response.body = createError(err);
          break;
        case Status.NotFound:
          ctx.response.status = Status.NotFound;
          ctx.response.body = createError(err);
          break;
        case Status.Conflict:
          ctx.response.status = Status.Conflict;
          ctx.response.body = createError(err);
          break;
        default:
          ctx.response.status = Status.InternalServerError;
          ctx.response.body = createError(err);
      }
    } else {
      // rethrow if it can't handle the error
      console.log(err);
      console.log("OTHER ERROR IN ERROR HANDLER");
      throw err;
    }
  }
};

type TErrorFormat = {
  name: string;
  msg: string;
};

const createError = (err: Error): TErrorFormat => {
  return {
    name: err.name,
    msg: err.message,
  };
};
