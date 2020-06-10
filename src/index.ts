import { ApolloServer } from "apollo-server";

import fs = require("fs");

const typeDefs = fs.readFileSync("./src/graphql/schema.graphql", "utf8");

const resolvers = {
  Query: {
    hello: (): string => "Hello",
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
