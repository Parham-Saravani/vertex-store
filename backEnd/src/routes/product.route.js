import Router from "express";
import { takeAllProducts,registerNewProduct , sendProductDetail , filterProducts , getAllCategories} from "../controllers/product.controller.js";

const router = Router();

router.post("/", registerNewProduct);
router.get("/", takeAllProducts);
router.get("/category", getAllCategories);
router.post("/filter", filterProducts);
router.get("/:id", sendProductDetail);

export default router;
