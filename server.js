const express = require('express');
const expressGraphQL = require('express-graphql');

const app = express();

app.use('/graphql', expressGraphQL({
  graphiql: true // Built-in dev app
}));

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
