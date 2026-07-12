import express from "express";
import userRouter from "./routes/user.router.js";
import messageRouter from "./routes/message.router.js";

const app = express();

app.use("/api/user", userRouter);
app.use("/api/message", messageRouter);

export default app;
