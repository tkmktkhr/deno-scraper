import { Application, Status, Context, isHttpError, log  } from "../mod.ts";

// setup logger
export const setLogger = async(target: log.LevelName) => {
  await log.setup({
    handlers: {
      stringFmt: new log.handlers.ConsoleHandler(target, {
        formatter: "[deno-{levelName}]: {msg}"
      }),
    },

    loggers: {
      // configure default logger available via short-hand methods above.
      default: {
        level: target, // The lowest out log level.
        handlers: ["stringFmt"],
      },
      prod: {
        level: "ERROR",
        handlers: ["stringFmt"],
      },
    },
  });
  const setLogger = log.getLogger();
  setLogger.debug('debug');
  setLogger.warning('warning');
  setLogger.info('info');
  setLogger.error('error');
  setLogger.critical('critical');
  return setLogger;
}

// When api throws an Error, the error is caught here.
export const logError = async (ctx: Context, next: () => Promise<void>) => {
  try {
    await next();
  } catch (err) {
    if (isHttpError(err)) {
      switch (err.status) {
        case Status.BadRequest:
          log.debug('BAD REQUEST DEBUG');
          log.info('BAD REQUEST INFO');
          log.error(createLog(err));
          break;
        case Status.Unauthorized:
          break;
        case Status.Forbidden:
          break;
        case Status.NotFound:
          break;
        case Status.Conflict:
          break;
        default:
          console.log(Status.InternalServerError);
          console.log(err);
      }
    } else {
      // rethrow if it can't handle the error
      console.log('OTHER ERROR IN LOGGER');
    }
    throw err;
  }
};

const createLog = (err: Error): string => {
  const stack = err.stack ?? '';
  return `
  [ERR-TYPE] ${err.name}
  [ERR-MSG] ${err.message}
  [ERR] ${stack}`;
};