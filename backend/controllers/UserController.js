const User = require("../models/User");

module.exports = class UserController {
  static async register(req, res) {
    res.send("Olá Get a Pet");
  }
};
