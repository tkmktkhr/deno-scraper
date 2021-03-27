import { Application, Context } from "./mod.ts";
import { errorHandler } from "./middlewares/errorHandler.ts";
import { setLogger, logError } from "./middlewares/logger.ts";
import router from "./infrastructures/routers/index.ts";

const app = new Application();

const port = parseInt(Deno.env.get("PORT") ?? "8001");

// Without middleware, the server can't be run.
// await setLogger();
// authorization -> app.pre()
app.use(errorHandler);
app.use(logError);
app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener("listen", ({ hostname, port }) => {
  console.log(
    `Start litening on ` + `${hostname ?? "localhost"}: ${port}`
  );
  console.log(Deno.env.get("ENV"));
  
});

app.listen({ port });