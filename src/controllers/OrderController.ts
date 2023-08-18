import { Request, Response } from "express";
import { OrderModel } from "../models/OrderModel";

export const getOrders = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const orders = await OrderModel.findAll();
    res.json(orders);
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ error: errorMessage });
  }
};

export const getOrderById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const order = await OrderModel.findByPk(id);
    if (!order) throw new Error("No se encontro la orden");
    res.json(order);
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ error: errorMessage });
  }
};

export const postOrder = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      paymentId,
      products,
      clientName,
      address,
      province,
      phone,
      email,
      postalCode,
    } = req.body;

    await OrderModel.create({
      paymentId,
      products,
      clientName,
      address,
      province,
      phone,
      postalCode,
      email,
      succesfull: false,
      pending: true,
    });
    res.status(201).send("Orden creada correctamente");
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ error: errorMessage });
  }
};

export const modifyOrder = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    const order = await OrderModel.findByPk(id);
    if (!order) throw new Error("Orden no encontrada");
    const modifyOrder = await order.update({
      succesfull: true,
      pending: false,
    });

    res.json({ message: "Orden completada", modifyOrder });
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ error: errorMessage });
  }
};

export const deleteOrder = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const order = await OrderModel.findByPk(id);
    if (!order) throw new Error("Orden no encontrada");
    await order.destroy();
    res.status(200).send("Orden borrada existosamente");
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(500).json({ error: errorMessage });
  }
};
