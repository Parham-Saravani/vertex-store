import express from "express";
import userRouter from "./routes/user.route.js";
import messageRouter from "./routes/message.route.js";

const app = express();

app.use("/api/user", userRouter);
app.use("/api/message", messageRouter);

export default app;
