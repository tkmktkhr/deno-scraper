import { Application, Status, Context, isHttpError, log  } from "../mod.ts";


// export class Err {
//   private a;

//   constructor() {
//     this.a = setLogger();
//   }

//   static log() {
//     a.info('BAD REQUEST INFO');
//     log.debug('BAD REQUEST DEBUG');
//     log.warning('BAD REQUEST warning');
//     log.error('クラスのの中のstatic関数');
//   }
// }

export const setLogger = async() => {
  await log.setup({
    handlers: {
      stringFmt: new log.handlers.ConsoleHandler("DEBUG", {
        formatter: "[deno-{levelName}]: {msg}"
      }),
    },

    loggers: {
      // configure default logger available via short-hand methods above.
      default: {
        level: "WARNING", // The lowest out log level.
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



// Judge the thrown error and return error obect.
export const logError = async (ctx: Context, next: () => Promise<void>) => {
  try {
    // pass here, when every request is received. 
    console.log('---  CALLED LOGERROR ---');
    await next();
  } catch (err) {
    // Err.log();
    const logLevel = Deno.env.get("LOG_LEVEL");
    console.log('INSIDE OF LOGGER');
    if (isHttpError(err)) {
        console.log('-------------------');
          log.getLogger();
      
        // Err.log;
      switch (err.status) {
        case Status.BadRequest:
          log.info('BAD REQUEST INFO');
          log.debug('BAD REQUEST DEBUG'); // NO Display
          // setLogger.error(err);
          break;
        case Status.Unauthorized:
          break;
        case Status.Forbidden:
          break;
        case Status.NotFound:
          // handle NotFound
          break;
        case Status.Conflict:
          console.log(err);
          break;
        default:
          // handle other statuses
          console.log(Status.InternalServerError);
          console.log(err);
      }
    } else {
      // rethrow if you can't handle the error
      console.log('OTHER ERROR IN LOGGER');
      
      // throw err;
    }
    throw err;
  }
};