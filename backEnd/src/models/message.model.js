import mongoose, { mongo } from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    author: { type: String },
    author_mail: { type: String },
    title: { type: String },
    message: { type: String },
  },
  { timestamps: true },
);
const Message = mongoose.model("message", messageSchema);
export default Message;
