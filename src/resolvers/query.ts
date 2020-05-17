import { IResolvers } from "graphql-tools";

const query: IResolvers = {
  Query: {
    hola(): String {
      return "Hola mundo";
    },
    holaConNombre(__: void, { nombre }, context): String {
      console.log(
        "RootQuery called with context " + context + " to find " + nombre
      );
      return `Hola mundo ${nombre}`;
    },
    holaAlCursoGraphQL(): String {
      return "Hola mundo en el curso de GraphQL";
    },
  },
};

export default query;
