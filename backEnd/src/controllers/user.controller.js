import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import generateJWT from "../utils/jwt/jwt.js";

const emailRegex = /\w@[a-zA-Z]+\.[a-zA-z]/;

const registerNewUser = async (req, res) => {
  const { username, email, password } = req.body;
  if (username && emailRegex.test(email) && password) {
    try {
      const isEmailTaken = await User.find({ email });
      const isUsernameTaken = await User.find({ username });
      const hashedPassword = await bcrypt.hash(password, 10);

      if (isUsernameTaken.length) {
        return res.status(200).json({ message: "USERNAME_TAKEN" });
      } else if (isEmailTaken.length) {
        return res.status(200).json({ message: "EMAIL_EXIST" });
      } else {
        const newUser = await User.create({
          username,
          email,
          password: hashedPassword,
        });
        const jwt = await generateJWT(newUser);
        return res.status(201).json({ message: "USER_CREATED", token: jwt });
      }
    } catch (error) {
      console.log(error);
      res.status(200).json({ message: "USER_NOT-CREATED" });
    }
  }
};
const loginUser = async (req, res) => {
  const { email, password } = req.body;
};
export { registerNewUser, loginUser };
