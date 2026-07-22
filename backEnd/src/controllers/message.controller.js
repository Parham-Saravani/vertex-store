import Message from "../models/message.model.js";
const emailRegex = /\w@[a-zA-Z]+\.[a-zA-z]/;
const registerNewMessage = async (req, res) => {
  const {author , fullName, email, title, message } = req.body;  
  if (fullName && emailRegex.test(email) && title && message) {
    try {
      await Message.create({author , fullName, email, title, message });
      res.status(201).json({message: 'MESSAGE_DELIVERED'})
    } catch (error) {
        res.status(400).json({message:"MESSAGE_NOT_DELIVERED"})
    }
  }
};

export { registerNewMessage };
