import User from "../models/user.model.js";

const registerNewUser = (req, res) => {
  console.log("user Created Successfully!!");
  res.status(201).json({ message: "user Created Successfully!!" });
};

export { registerNewUser };
