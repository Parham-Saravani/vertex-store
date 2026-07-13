import Router from "express";
import {
  takeAllProducts,
  registerNewProduct,
} from "../controllers/product.controller.js";

const router = Router();

router.post("/", registerNewProduct);
router.get("/", takeAllProducts);

export default router;
