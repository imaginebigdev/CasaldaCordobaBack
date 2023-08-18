import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/database";
import { CategoryModel } from "./CategoryModel";

/**
 * @class Model
 * @description Se debe crear con esto que se documenta aqui debajo para que funcione correctamente
 */

export class ProductModel extends Model {
  public id!: number;
  public name!: string;
  public description!: string;
  public image!: string;
  public price!: number;
  public stock!: number;
}

ProductModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,

      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: "product", // Nombre de la tabla en la base de datos

    sequelize,
  }
);

CategoryModel.hasMany(ProductModel, {
  foreignKey: "categoryId",
});
ProductModel.belongsTo(CategoryModel, {
  foreignKey: "categoryId",
});
