import { Router } from "express";
import registerNewMessage from "../controllers/message.controller";
const router = Router();

router.post("/register", registerNewMessage);

export default router;
