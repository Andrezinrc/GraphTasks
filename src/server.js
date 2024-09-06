const express = require('express');
const expressGraphql = require('express-graphql');
const resolvers = require('./resolvers');
const schema = require('./schema');

require('../config/db');

const port = process.env.PORT || 4000;

const app = express();

app.use('/graphql', expressGraphql.graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true,
}));

app.listen(port, () => console.log('Servidor GraphQL rodando na porta 4000'));
