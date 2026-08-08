import Router from "express";
import { takeAndSendData , takeAllUsers , takeAllMessages , takeAllOrders} from "../controllers/dashboard.controller.js";
const router = Router();

router.get("/admin", takeAndSendData);
router.get('/admin/users', takeAllUsers)
router.get('/admin/messages', takeAllMessages)
router.get('/admin/orders', takeAllOrders)
export default router;
