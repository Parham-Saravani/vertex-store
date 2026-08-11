import { registerNewOrder , takeOrders , takeUserOrders} from "../controllers/order.controller.js";
import Router from "express";
const router = Router();

router.post("/", registerNewOrder);
router.get("/", takeOrders);
router.get("/:token", takeUserOrders)
export default router;
