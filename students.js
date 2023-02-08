const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

//students api endpoints
//get = all students
//post = add a new student

const schema = new mongoose.Schema({
  name: String,
});

const studentModel = mongoose.model("student", schema);

router.get("/students", (req, res) => {
  studentModel
    .find()
    .then((response) => res.status(200).send(response))
    .catch((err) => res.status(400).send(err));
});

router.post("/students", (req, res) => {
  const student = new studentModel(req.body);

  student
    .save()
    .then((response) => res.status(200).send(response))
    .catch((err) => res.status(400).send(err));
});

module.exports = router;
