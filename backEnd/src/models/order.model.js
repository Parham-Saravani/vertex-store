import mongoose from "mongoose";
const orderSchema = new mongoose.Schema(
  {
    userID: { type: String, required: true },
    products: [{}],
    status: {
      type: String,
      enum: ["pending", "complete", "delete"],
      default: "pending",
    },
    totalPrice: { type: Number, required: true },
  },
  { timestamps: true },
);
const Order = mongoose.model("order", orderSchema);
export default Order;
