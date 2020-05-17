import express from 'express';
import compression from 'compression';
import cors from 'cors';
import { IResolvers, makeExecutableSchema } from "graphql-tools";
import { GraphQLSchema } from 'graphql';
import GraphQLHTTP from 'express-graphql';

const app = express();

app.use('*', cors());

app.use(compression());

const PORT = '5300';

const typeDefs = `
type Query{
    hola: String!,
    holaConNombre(nombre: String!): String!,
    holaAlCursoGraphQL: String!
}`;

const resolvers : IResolvers = {
    Query:{
        hola(): String{
            return 'Hola mundo';
        },
        holaConNombre(__:void, {nombre}, context): String{
            console.log("RootQuery called with context " +
        context + " to find " + nombre);
            return `Hola mundo ${nombre}`;
        },
        holaAlCursoGraphQL(): String{
            return 'Hola mundo en el curso de GraphQL';
        }
    }

}

const schema: GraphQLSchema = makeExecutableSchema({typeDefs,resolvers});

app.use('/',GraphQLHTTP({
    schema ,
    graphiql: true
}));

app.listen(
    { port: PORT},
    ()=>console.log(`Hola mundo api GraphQL ejecutando por la url http://localhost:${PORT}/graphql`)
);
