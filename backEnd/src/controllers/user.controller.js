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
        res.status(200).json({ message: "USERNAME_TAKEN" });
      } else if (isEmailTaken.length) {
        res.status(200).json({ message: "EMAIL_EXIST" });
      } else {
        const newUser = await User.create({username,email,password: hashedPassword});
        const token = await generateJWT(newUser);
        res.status(201).json({ message: "USER_CREATED", token , user:{username: newUser.username, imageUrl:newUser.imageUrl , email: newUser.email}});
      }
    } catch (error) {
      console.log(error);
      
      res.status(200).json({ message: "USER_NOT-CREATED" });
    }
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const newUser = await User.findOne({ email });
  if (newUser) {
    const isPasswordMatch = await bcrypt.compare(password, newUser.password)
    if (isPasswordMatch) {
      const token = await generateJWT(newUser);
      res.status(200).json({ message: "LOGIN_SUCCESSFULLY", token , user:{username :newUser.username ,imageUrl : newUser.imageUrl , email:newUser.email }});
    } else {
      res.status(200).json({ message: "INVALID_CREDENTIALS" });
    }
  } else {
    res.status(200).json({ message: "INVALID_CREDENTIALS" });
  }
};
export { registerNewUser, loginUser };
