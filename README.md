# deno-scraper

## Source tree

```
/src
 ├── constants
 ├── entities
 ├── infrastructures
 │   ├── apis
 │   └── routers
 ├── interfaces
 │   ├── controllers
 │   ├── databases
 │   │   ├── models
 │   │   └── repositoryImples
 │   ├── repositories
 │   ├── requests
 │   └── responses
 ├── middlewares
 │   ├── errorHandler.ts
 │   ├── logger.ts
 ├── usecases
 └── valueObjects
```

## Start server

`deno run -c tsconfig.json --allow-net --allow-env --allow-read ./src/app.ts` or
`denon start`

## Debug mode

`deno run -c tsconfig.json --allow-net --allow-env --allow-read ./src/app.ts` or
`denon debug`

then access `chrome://inspect` on a chorme browser, click incpect button.

## Check a tree listing of all dependencies and update them

`deno info --no-check src/deps.ts`

## Deno cache reload

`deno cache --reload src/deps.ts`
