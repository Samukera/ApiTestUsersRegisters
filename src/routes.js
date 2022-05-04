const routes = require("express").Router();
const { User } = require("./app/models");

User.create({
  name: "Samuel",
  email: "samuel@gamil.co",
  password_hash: "1234"
});

module.exports = routes;