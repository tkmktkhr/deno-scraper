import { Application, Context } from "./mod.ts";
import { errorHandler } from "./middlewares/errorHandler.ts";
import router from "./infrastructures/routers/index.ts";

const app = new Application();

const port = parseInt(Deno.env.get("PORT") ?? "8001");

// app.use(router.routes());
// app.use(errorHandler);

app.use(errorHandler);
app.use(router.routes());
app.use(router.allowedMethods());

// Without middleware, the server can't be run.
app.use(async (ctx: Context, next: () => Promise<void>) => {
  console.log(ctx);
  await next();
  // ctx.response.body = "Hello World!";
});

// Logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.headers.get("X-Response-Time");
  console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
});

// app.use(async (ctx: Context, next: () => Promise<void>) => {
//   console.log('Passing error handler');
  
//   await errorHandler(ctx, next);
//   });


app.addEventListener("listen", ({ hostname, port }) => {
  console.log(
    `Start litening on ` + `${hostname ?? "localhost"}: ${port}`
  );
  console.log(Deno.env.get("ENV"));
  
});

app.listen({ port });