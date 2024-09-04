const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const { resolvers } = require('./resolvers');
const { schema } = require('./schema');

const port = process.env.PORT || 4000

const app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema, 
  rootValue: resolvers,
  graphiql: true,
}));

app.listen(port, () => console.log('Servidor GraphQL rodando na porta 4000'));