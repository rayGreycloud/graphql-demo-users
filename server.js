const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');
const PORT = 4000;
const app = express();

app.use('/graphql', expressGraphQL({
  schema, // ES6 syntax
  graphiql: true // Built-in dev app

}));

app.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}`);
});
