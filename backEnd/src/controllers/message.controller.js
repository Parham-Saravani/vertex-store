import Message from "../models/message.model.js";
import jwt from "jsonwebtoken";
const emailRegex = /\w@[a-zA-Z]+\.[a-zA-z]/;
const registerNewMessage = async (req, res) => {
  const { author, fullName, email, title, message } = req.body;
  const user = jwt.verify(author , process.env.JWT_SECRET)
  const {id : userID} = user;
  console.log(userID);
  
  if (fullName && emailRegex.test(email) && title && message) {
    try {
      await Message.create({ author: userID , fullName, email, title, message });
      res.status(201).json({ message: "MESSAGE_DELIVERED" });
    } catch (error) {
      console.log(error);
      
      res.status(400).json({ message: "MESSAGE_NOT_DELIVERED" });
    }
  }
};

export { registerNewMessage };
