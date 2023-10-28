const express = require('express');
const app = express();

require('dotenv').config
require('express-async-errors');

const mainRouter = require('./routes')

const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(express.static('./public'));
app.use(express.json());

app.use('/api/v1', mainRouter)

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server is listening on ${port}...`);
    });
  } catch (error) {
    console.log(error)
  }
};

start();
