import { Router } from "express";
import { registerNewMessage , takeUserMessage} from "../controllers/message.controller.js";
const router = Router();

router.post("/", registerNewMessage);
router.get("/:token", takeUserMessage)
export default router;
