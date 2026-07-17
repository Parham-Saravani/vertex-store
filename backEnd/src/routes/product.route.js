import Router from "express";
import { takeAllProducts,registerNewProduct , sendProductDetail} from "../controllers/product.controller.js";

const router = Router();

router.post("/", registerNewProduct);
router.get("/", takeAllProducts);
router.get("/:id", sendProductDetail);

export default router;
