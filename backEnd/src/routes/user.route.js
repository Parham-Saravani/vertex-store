import { Router } from "express";
import { registerNewUser, loginUser , takeUserData } from "../controllers/user.controller.js";

const router = Router();

router.post("/register", registerNewUser);
router.post("/", loginUser);
router.get('/:token', takeUserData)

export default router;
