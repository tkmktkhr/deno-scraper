import { Application, Context, isHttpError, log, Status } from "../mod.ts";

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
    if (isHttpError(err)) {
      switch (err.status) {
        case Status.BadRequest:
          log.error(createLog(err));
          break;
        case Status.Unauthorized:
          log.error(createLog(err));
          break;
        case Status.Forbidden:
          log.error(createLog(err));
          break;
        case Status.NotFound:
          log.error(createLog(err));
          break;
        case Status.Conflict:
          log.error(createLog(err));
          break;
        default:
          log.error(createLog(err));
      }
    } else {
      // rethrow if it can't handle the error
      log.error("EXCEPTION ERROR");
      log.error(createLog(err));
    }
    throw err;
  }
};

const createLog = (err: Error): string => {
  const stack = err.stack ?? "";
  return `
  [ERR-TYPE] ${err.name}
  [ERR-MSG] ${err.message}
  [ERR-STACK] ${stack}`;
};
