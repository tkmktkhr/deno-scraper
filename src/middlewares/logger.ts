import { Context, isHttpError, log, Status } from "../mod.ts";
import { CustomError } from "../common/error.ts";

// setup logger
export const setLogger = async (target: log.LevelName) => {
  await log.setup({
    handlers: {
      stringFmt: new log.handlers.ConsoleHandler(target, {
        formatter: "[deno-{levelName}]: {msg}",
      }),
    },

    loggers: {
      // configure default logger available via short-hand methods above.
      default: {
        level: target, // The lowest log level.
        handlers: ["stringFmt"],
      },
      prod: {
        level: "WARNING",
        handlers: ["stringFmt"],
      },
    },
  });
  return log.getLogger();
};

// When api throws an Error, the error is caught here.
export const logError = async (ctx: Context, next: () => Promise<void>) => {
  try {
    await next();
  } catch (err) {
    if (!isHttpError(err)) {
      const errLog = await createErrLog(err, ctx);
      log.error(errLog);
    } else {
      // throw returns content-type: text/plain; charset=utf-8
      const reqLog = await createReqLog(ctx);
      log.error(reqLog);
    }
    throw err;
  }
};

const createErrLog = async (
  err: CustomError,
  ctx: Context,
): Promise<string> => {
  const reqLog = await createReqLog(ctx);
  return `${reqLog}
  [ERR-TYPE] ${err.name}
  [ERR-CONTENTS] ${err.contents}
  [ERR-STACK] ${err.stack ?? ""}`;
};

const createReqLog = async (ctx: Context): Promise<string> => {
  const url = ctx.request.url;
  const reqBody = ctx.request.body();
  const reqVal = await reqBody.value;
  return `
  [REQ-URL] ${url}
  [REQ_PARAMS] ${createReqParams(reqVal)}`;
};

// TODO Modify any. reqVal is request parameter so it could be any type.
const createReqParams = (reqVal: any) =>
  Object.entries(reqVal).map((param) => `${param[0]}: ${param[1]}`);
