const toDoControllers = require("../toDoList/controllers");

module.exports = app => {
  app.use("/toDo", toDoControllers);
  app.listen(3000, console.log("Server up on port 3000"));
};
