import express from "express";
import compression from "compression";
import cors from "cors";

const app = express();

app.use(compression());

app.use("/", (re, res) => {
  res.send("Bienvenido a la app de GraphQL");
});

const PORT = "5300";

app.listen({ port: PORT }, () =>
  console.log(
    `Hola mundo api GraphQL ejecutando por la url http://localhost:${PORT}`
  )
);
