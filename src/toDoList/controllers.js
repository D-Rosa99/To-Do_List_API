const express = require("express");
const router = express.Router();
const { toDo, inputValidation } = require("./model");

router.get("/", async (req, res) => {
  const listToDo = await toDo.find();
  res.status(200).json(listToDo);
});

router.post("/", async (req, res) => {
  const { error, value } = inputValidation(req.body);
  if (error) return res.status(400).send(error.message);

  const toDoItem = await getToDo(value.toDo);
  if (toDoItem) {
    return res.status(400).send("That task already exist in the list!");
  }

  const newToDo = new toDo(value);
  await newToDo.save();
  return res.status(200).send("Add it successfully!");
});

router.put("/:toDo", async (req, res) => {
  const { error, value } = inputValidation(req.body);
  if (error) return res.status(400).send(error.message);

  const toDoItem = await getToDo(value.toDo);
  if (toDoItem) {
    return res.status(400).send("That task already exist in the list!");
  }

  const newToDo = await toDo.findOneAndUpdate(
    { toDo: req.params.toDo },
    { $set: value },
    { useFindAndModify: false }
  );
  if (!newToDo) return res.status(404).send("That task do not exist!");

  return res.status(200).send("Update it successfully!");
});

router.delete("/:toDo", async (req, res) => {
  const toDoItem = await toDo.findOneAndDelete({ toDo: req.params.toDo });
  if (!toDoItem) return res.status(404).send("That task do not exist!");

  return res.status(200).send("Delete it successfully!");
});

async function getToDo(userInput) {
  return await toDo.findOne({ toDo: userInput });
}

module.exports = router;
