const mongoose = require("mongoose");
const Joi = require("@hapi/joi");

const toDo = mongoose.model(
  "To-Do_List",
  new mongoose.Schema({
    toDo: {
      type: String,
      minlength: 2,
      required: true
    },
    date: {
      type: String,
      default: new Date()
        .toLocaleDateString("en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric"
        })
        .split(" ")
        .join("-")
    }
  })
);

function inputValidation(userInput) {
  const schema = Joi.object({
    toDo: Joi.string()
      .min(2)
      .required()
  });

  return schema.validate(userInput);
}

module.exports = { toDo, inputValidation };
