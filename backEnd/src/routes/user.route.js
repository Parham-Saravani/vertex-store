import { Router } from "express";
import { registerNewUser, loginUser , takeUserData } from "../controllers/user.controller.js";

const router = Router();

router.post("/register", registerNewUser);
router.post("/", loginUser);
router.get('/:id', takeUserData)

export default router;
