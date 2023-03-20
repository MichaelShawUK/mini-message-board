var express = require("express");
var router = express.Router();

const fruit = process.env.fruit;

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date().toString().slice(0, 21),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date().toString().slice(0, 21),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Message Board", messages, fruit });
});

router.get("/new", function (req, res, next) {
  res.render("form");
});

router.post("/new", function (req, res, next) {
  messages.push({
    text: req.body.messageText,
    user: req.body.author,
    added: new Date().toString().slice(0, 21),
  });
  res.redirect("/");
});

module.exports = router;
