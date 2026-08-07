import mongoose, { mongo } from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    author: { type: String, required: true },
    fullName: { type: String },
    email: { type: String },
    title: { type: String },
    message: { type: String },
    status: { type: String, default: "pending" },
  },
  { timestamps: true },
);
const Message = mongoose.model("message", messageSchema);
export default Message;
