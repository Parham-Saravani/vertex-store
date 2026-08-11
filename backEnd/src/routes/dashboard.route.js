import Router from "express";
import { takeAndSendData , takeAllUsers , takeAllMessages , takeAllOrders , takeUserData} from "../controllers/dashboard.controller.js";
const router = Router();

router.get("/admin", takeAndSendData);
router.get('/admin/users', takeAllUsers)
router.get('/admin/messages', takeAllMessages)
router.get('/admin/orders', takeAllOrders)
router.get('/user/:token', takeUserData);
export default router;
