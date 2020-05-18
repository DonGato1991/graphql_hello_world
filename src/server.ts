import express from "express";
import compression from "compression";
import cors from "cors";
import schema from "./schema";
import { ApolloServer } from "apollo-server-express";
import { createServer } from "http";

const app = express();

app.use("*", cors());

app.use(compression());

const PORT = "5300";

const server = new ApolloServer({
  schema,
  introspection: true,
});
server.applyMiddleware({ app });

const httpServer = createServer(app);
httpServer.listen({ port: PORT }, () =>
  console.log(
    `Hola mundo api GraphQL ejecutando por la url http://localhost:${PORT}/graphql`
  )
);

/*
app.use('/',GraphQLHTTP({
    schema ,
    graphiql: true
}));
app.listen({ port: PORT }, () =>
  console.log(
    `Hola mundo api GraphQL ejecutando por la url http://localhost:${PORT}/graphql`
  )
);
*/
