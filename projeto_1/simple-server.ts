import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
    type Query {
        helloWorld: String!
    }
    # type Mutation {}
`

const server = new ApolloServer({
    typeDefs,
});

server.listen().then(({ url }) => {
  console.log(`Servidor executando em: ${url}`);
});
