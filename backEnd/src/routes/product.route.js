import Router from "express";
import { registerNewProduct } from "../controllers/product.controller.js";

const router = Router();

router.post("/register", registerNewProduct);

export default router;
