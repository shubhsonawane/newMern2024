const User = require("../models/user-model");
// const bcrypt = require("bcryptjs");
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

    userCreated = await User.create({ username, email, phone, password });
    res.status(201).json({
      msg: "Registration Successful",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    res.status(500).send({ msg: "Internal server error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExists = await User.findOne({ email: email });
    if (!userExists) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const user = await userExists.comparePassword(password);

    if (user) {
      res.status(200).json({
        msg: "Login Successful",
        token: await userExists.generateToken(),
        userId: userExists._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).send({ msg: "Internal server error" });
  }
};
module.exports = { home, register, login };
