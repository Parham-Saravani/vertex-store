import { Router } from "express";
import { registerNewUser, loginUser } from "../controllers/user.controller.js";

const router = Router();

router.post("/register", registerNewUser);
router.post("/", loginUser);

export default router;
