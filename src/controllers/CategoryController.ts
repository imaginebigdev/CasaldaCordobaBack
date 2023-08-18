import { Request, Response } from "express";
import { CategoryModel } from "../models/CategoryModel";

export const getCategories = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const categories = await CategoryModel.findAll();
    res.json(categories);
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ error: errorMessage });
  }
};

export const postCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name } = req.body;

    await CategoryModel.create({ name: name });
    res.status(201).send("Categoria creada correctamente");
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ error: errorMessage });
  }
};

export const getCategoriesById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const category = await CategoryModel.findByPk(id);
    res.json(category);
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ error: errorMessage });
  }
};

export const deleteCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const category = await CategoryModel.findByPk(id);
    if (!category) throw new Error("Categoria no encontrada");
    await category.destroy();
    res.status(200).send("Categoria borrada existosamente");
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ error: errorMessage });
  }
};
