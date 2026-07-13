import Message from "../models/message.model.js";
const emailRexex = /\w@[a-zA-Z]+\.[a-zA-z]/;
const registerNewMessage = async (req, res) => {
  const { fullName, email, title, message } = req.body;
  if (fullName && emailRexex.test(email) && title && message) {
    try {
      await Message.create({ fullName, email, title, message });
      res.status(201).json({message: 'MESSAGE_DELIVERED'})
    } catch (error) {
        res.status(400).json({message:"MESSAGE_NOT_DELIVERED"})
    }
  }
};

export { registerNewMessage };
