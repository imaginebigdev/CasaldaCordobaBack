import { Router } from "express";
import {
  deleteOrder,
  getOrderById,
  getOrders,
  modifyOrder,
  postOrder,
} from "../controllers/OrderController";

const router = Router();

router.get("/", getOrders);
router.post("/", postOrder);
router.get("/:id", getOrderById);
router.put("/:id", modifyOrder);
router.delete("/:id", deleteOrder);

export default router;
