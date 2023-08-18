import { Router } from "express";
import {
  deleteProduct,
  getProductById,
  getProducts,
  modifyProduct,
  postProduct,
} from "../controllers/ProductController";

const router = Router();

router.get("/", getProducts);
router.post("/", postProduct);
router.get("/:id", getProductById);
router.put("/:id", modifyProduct);
router.delete("/:id", deleteProduct);

export default router;
