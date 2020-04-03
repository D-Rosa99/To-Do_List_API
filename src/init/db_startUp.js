const mongoose = require("mongoose");

module.exports = () => {
  mongoose
    .connect("mongodb://localhost:27017/To-Do_List", {
      useUnifiedTopology: true,
      useNewUrlParser: true
    })
    .then(() => console.log("Database up!"))
    .catch(err => console.log("Something went wrong ", err));
};
