const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

app.use('/graphql', expressGraphQL({
  schema, // ES6 syntax
  graphiql: true // Built-in dev app

}));

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
