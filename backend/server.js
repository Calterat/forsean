const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const sequelize = require('./config/connection');

// create an instance of express
const app = express();
// pull from node's process PORT or dedicate 3001
const PORT = process.env.PORT || 3001;

// required to recieve json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
// use the api routes.
app.use(routes);

// syncs with the database first before starting the express server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {console.log(`App listening on port ${PORT}!`);});
})