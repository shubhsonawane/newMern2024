const User = require("../models/user-model");
const home = async (req, res) => {
  try {
    res.status(200).send("hello world");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;
    const userExists = await User.findOne({ email: email });

    if (userExists) {
      return res.status(400).json({ msg: "Email already exists" });
    }

    data = await User.create({ username, email, phone, password });
    res.status(201).json({ data });
  } catch (error) {
    res.status(404).send({ msg: "page not found" });
  }
};
module.exports = { home, register };
