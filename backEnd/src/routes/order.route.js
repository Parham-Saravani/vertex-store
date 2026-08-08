import { registerNewOrder , takeOrders} from "../controllers/order.controller.js";
import Router from "express";
const router = Router();

router.post("/", registerNewOrder);
router.get("/", takeOrders);

export default router;
