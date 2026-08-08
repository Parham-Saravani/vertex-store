import User from "../models/user.model.js";
import Order from "../models/order.model.js";
import Product from "../models/product.model.js";
import Message from "../models/message.model.js";

const takeAndSendData = async (req, res) => {
  const usersCount = await User.countDocuments();
  const ordersCount = await Order.countDocuments();
  const productsCount = await Product.countDocuments();
  const totalIncome = await takeTotalIncome();

  res
    .status(200)
    .json({ stats: { usersCount, ordersCount, productsCount, totalIncome } });
};
const takeTotalIncome = async () => {
  const completedOrders = await Order.find({ status: "complete" });
  const price = completedOrders.reduce((sum, current) => {
    return sum + current.totalPrice;
  }, 0);
  return price;
};

const takeAllUsers = async (req, res) => {
  const users = await User.find();
  const totalUsers = await User.countDocuments();
  const deletedUsers = await User.countDocuments({ stats: "delete" });
  const admins = await User.countDocuments({ role: "admin" });

  const thisWeek = new Date();
  thisWeek.setDate(thisWeek.getDate() - 7);
  const usersCreatedThisWeek = await User.countDocuments({
    createdAt: { $gte: thisWeek },
  });

  res.status(200).json({
    stats: { totalUsers, deletedUsers, admins, usersCreatedThisWeek },
    users,
  });
};
const takeAllMessages = async (req, res) => {
  const allMessages = await Message.find();
  const totalMessages = await Message.countDocuments();
  const closedMessages = await Message.countDocuments({ status: "close" });
  const pendingMessages = await Message.countDocuments({ status: "pending" });
  const openMessages = await Message.countDocuments({ status: "open" });
  res.json({
    stats: { totalMessages, closedMessages, pendingMessages, openMessages },
    messages: allMessages,
  });
};
const takeAllOrders = async (req, res) => {
  const allOrders = await Order.find();
  const totalOrders = await Order.countDocuments();
  const deleteOrders = await Order.countDocuments({ status: "delete" });
  const pendingOrders = await Order.countDocuments({ status: "pending" });
  const completeOrders = await Order.countDocuments({ status: "complete" });
  res.json({ stats: {totalOrders , deleteOrders , pendingOrders , completeOrders}, orders: allOrders });
};
export { takeAndSendData, takeAllUsers, takeAllMessages };
