import Router from "express";
import { takeAllProducts,registerNewProduct , sendProductDetail , filterProducts , getAllCategories , getSortedItems , searchHandler} from "../controllers/product.controller.js";

const router = Router();

router.post("/", registerNewProduct);
router.get("/", takeAllProducts);
router.get("/category", getAllCategories);
router.post("/filter", filterProducts);
router.post("/sort", getSortedItems);
router.get("/search/:title", searchHandler);
router.get("/:id", sendProductDetail);

export default router;
