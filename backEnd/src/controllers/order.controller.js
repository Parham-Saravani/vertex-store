import Order from "../models/order.model.js";
import jwt from "jsonwebtoken";
const registerNewOrder = async (req, res) => {
  const { token, products } = req.body;
  const userData = jwt.verify(token, process.env.JWT_SECRET);
  const { id } = userData;
  const price = products.reduce((sum, current) => {
    return sum + current.price;
  }, 0);
  try {
    const registerOrder = await Order.create({ userID: id, products , totalPrice:price});
    res.status(200).json("Created");
  } catch (error) {
    res.status(200).json("NOT-Created");
  }
};
const takeOrders = async (req, res) => {
  const totalOrders = await Order.find();
  res.status(200).json(totalOrders);
};
export { registerNewOrder, takeOrders };
