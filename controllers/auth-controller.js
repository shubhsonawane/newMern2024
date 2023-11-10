const home = async (req, res) => {
  try {
    res.status(200).send("hello world");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    res.status(200).send("register page");
  } catch (error) {
    res.status(404).send({ msg: "page not found" });
  }
};
module.exports = { home, register };
