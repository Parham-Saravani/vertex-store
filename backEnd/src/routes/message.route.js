import { Router } from "express";
import { registerNewMessage } from "../controllers/message.controller.js";
const router = Router();

router.post("/register", registerNewMessage);

export default router;
