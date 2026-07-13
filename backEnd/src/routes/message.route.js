import { Router } from "express";
import { registerNewMessage } from "../controllers/message.controller.js";
const router = Router();

router.post("/", registerNewMessage);

export default router;
