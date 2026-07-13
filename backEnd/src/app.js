import express from "express";
import cors from "cors";
import userRouter from "./routes/user.route.js";
import messageRouter from "./routes/message.route.js";
import productRouter from "./routes/product.route.js";
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/messages", messageRouter);
app.use("/api/products", productRouter);

export default app;
