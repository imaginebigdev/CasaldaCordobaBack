import { Request, Response } from "express";
import { ProductModel } from "../models/ProductModel";
const key_admin_back = process.env.KEY_ADMIN;

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
    const {
      name,
      description,
      image,
      price,
      categoryId,
      type,
      province,
      location,
      ubication,
      environments,
      bathrooms,
      antiquity,
      status,
      yard,
      gas,
      cover_m2,
      total_m2,
      garage,
      services,
      image_galery,
      key_admin,
    } = req.body;
    console.log(req.body);

    if (key_admin !== key_admin_back)
      throw new Error("Error en las credenciales");

    await ProductModel.create({
      name,
      description,
      image,
      price,
      type,
      province,
      location,
      ubication,
      environments,
      bathrooms,
      antiquity,
      status,
      yard,
      garage,
      services,
      gas,
      image_galery,
      cover_m2,
      total_m2,
      categoryId,
    });
    res.status(201).send("Propiedad creada correctamente");
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
    const {
      name,
      description,
      image,
      price,
      environments,
      bathrooms,
      antiquity,
      status,
      garage,
      services,
      image_galery,
      categoryId,
      key_admin,
    } = req.body;
    if (key_admin !== key_admin_back)
      throw new Error("Error en las credenciales");

    const product = await ProductModel.findByPk(id);
    if (!product) throw new Error("Propiedad no encontrada");
    const modifyProduct = await product.update({
      name,
      price,
      description,
      image,
      categoryId,
      environments,
      garage,
      services,
      bathrooms,
      antiquity,
      status,
      image_galery,
    });

    res.json({ message: "Propiedad modificada ", modifyProduct });
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
    const { key_admin } = req.body;
    if (key_admin !== key_admin_back)
      throw new Error("Error en las credenciales");

    const product = await ProductModel.findByPk(id);
    if (!product) throw new Error("Propiedad no encontrada");
    await product.destroy();
    res.status(200).send("Propiedad borrada existosamente");
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ error: errorMessage });
  }
};
