import { Router } from "express";
import {
  deleteCategory,
  getCategories,
  getCategoriesById,
  postCategory,
} from "../controllers/CategoryController";

const router = Router();

router.get("/", getCategories);
router.post("/", postCategory);
router.get("/:id", getCategoriesById);
router.delete("/:id", deleteCategory);

export default router;
