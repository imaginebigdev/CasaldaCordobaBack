import { Request, Response } from "express";
import { ProductModel } from "../models/ProductModel";
import { OrderModel } from "../models/OrderModel";

export const getProducts = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const products = await ProductModel.findAll();
    res.json(products);
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ error: errorMessage });
  }
};

export const postProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, description, image, price, stock, categoryId } = req.body;

    await ProductModel.create({
      name,
      description,
      image,
      price,
      stock,
      categoryId,
    });
    res.status(201).send("Producto creado correctamente");
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ error: errorMessage });
  }
};

export const getProductById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const product = await ProductModel.findByPk(id);
    res.json(product);
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ error: errorMessage });
  }
};

export const modifyProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const { name, price, description, image, stock } = req.body;

    const product = await ProductModel.findByPk(id);
    if (!product) throw new Error("Producto no encontrado");
    const modifyProduct = await product.update({
      name,
      price,
      description,
      image,
      stock,
    });

    res.json({ message: "Producto modificado", modifyProduct });
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ error: errorMessage });
  }
};

export const deleteProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const product = await ProductModel.findByPk(id);
    if (!product) throw new Error("Producto no encontrado");
    await product.destroy();
    res.status(200).send("Producto borrado existosamente");
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ error: errorMessage });
  }
};
