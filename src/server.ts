import express from 'express';
import compression from 'compression';
import cors from 'cors';
import GraphQLHTTP from 'express-graphql';
import schema from './schema';

const app = express();

app.use('*', cors());

app.use(compression());

const PORT = '5300';

app.use('/',GraphQLHTTP({
    schema ,
    graphiql: true
}));

app.listen(
    { port: PORT},
    ()=>console.log(`Hola mundo api GraphQL ejecutando por la url http://localhost:${PORT}/graphql`)
);
