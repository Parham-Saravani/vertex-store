import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import generateJWT from "../utils/jwt/jwt.js";
import jwt from "jsonwebtoken";

const emailRegex = /\w@[a-zA-Z]+\.[a-zA-z]/;

const registerNewUser = async (req, res) => {
  const { username, email, password } = req.body;
  if (username && emailRegex.test(email) && password) {
    try {
      const isEmailTaken = await User.find({ email });
      const isUsernameTaken = await User.find({ username });
      const hashedPassword = await bcrypt.hash(password, 10);

      if (isUsernameTaken.length) {
        res.status(200).json({ message: "USERNAME_TAKEN" });
      } else if (isEmailTaken.length) {
        res.status(200).json({ message: "EMAIL_EXIST" });
      } else {
        const newUser = await User.create({
          username,
          email,
          password: hashedPassword,
        });
        const token = await generateJWT(newUser);
        res.status(201).json({
          message: "USER_CREATED",
          token,
          user: {
            username: newUser.username,
            imageUrl: newUser.imageUrl,
            email: newUser.email,
          },
        });
      }
    } catch (error) {
      res.status(200).json({ message: "USER_NOT-CREATED" });
    }
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const newUser = await User.findOne({ email });
  if (newUser) {
    const isPasswordMatch = await bcrypt.compare(password, newUser.password);
    if (isPasswordMatch) {
      const token = await generateJWT(newUser);
      res.status(200).json({
        message: "LOGIN_SUCCESSFULLY",
        token,
        user: {
          username: newUser.username,
          imageUrl: newUser.imageUrl,
          email: newUser.email,
        },
      });
    } else {
      res.status(200).json({ message: "INVALID_CREDENTIALS" });
    }
  } else {
    res.status(200).json({ message: "INVALID_CREDENTIALS" });
  }
};

const takeUserData = async (req, res) => {
  const token = req.params.token;
  console.log(token);
  const data = jwt.verify(token, process.env.JWT_SECRET);
  const { id: userID } = data;
  try{
      const user = await User.findOne({ _id: userID });
      console.log(user);
      const { role, username, email, imageUrl, createdAt } = user;
      res.status(200).json({ role, username, email, imageUrl, createdAt});
  }catch(err){
    console.log(err);
  }
};
export { registerNewUser, loginUser, takeUserData };
