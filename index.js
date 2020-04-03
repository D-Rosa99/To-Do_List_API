const express = require("express");
const app = express();
app.use(express.json());

require("./src/init/db_startUp")();
require("./src/init/server_startUp")(app);
