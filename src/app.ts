import { Application } from "./mod.ts";

const app = new Application();

const port = parseInt(Deno.env.get("PORT") ?? "8001");

// Without middleware, the server can't be run.
app.use((ctx) => {
  ctx.response.body = "Hello World!";
});

app.addEventListener("listen", ({ hostname, port }) => {
  console.log(
    `Start litening on ` + `${hostname ?? "localhost"}: ${port}`
  );
  console.log(Deno.env.get("ENV"));
  
});

app.listen({ port });