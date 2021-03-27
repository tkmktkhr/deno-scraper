import { Application, Status, Context, isHttpError } from "../mod.ts";

  // app.use((ctx, next) => {
  //   ctx.request; // contains request information
  //   ctx.response; // setups up information to use in the response;
  //   await next(); // manages the flow control of the middleware execution
  // });

// Judge the thrown error and return error obect.
export const errorHandler = async (ctx: Context, next: () => Promise<void>) => {
  try {
    // pass here, when every request is received. 
    console.log('---  CALLED ERRHANDLER ---');
    
    await next();
  } catch (err) {
    if (isHttpError(err)) {
      console.log(err);
      console.log('上のエラーを仕分け');
      
      switch (err.status) {
        case Status.BadRequest:
          console.log('BAD REQUEST');
          console.log(err);
          ctx.response.status = 400;
          console.log('---  END CALLED ERRHANDLER ---');

          ctx.response.body = {
            "name": err.name,
            "msg": err.message,
            };
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
    console.log(err)
      console.log('OTHER ERROR IN ERROR HANDLER');
      
      throw err;
    }
  }
};