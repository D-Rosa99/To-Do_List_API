const mongoose = require("mongoose");

module.exports = () => {
  mongoose
    .connect("mongodb:mongo:27017/docker-node-mongo", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => console.log("Database up!"))
    .catch((err) => console.log("Something went wrong ", err));
};
