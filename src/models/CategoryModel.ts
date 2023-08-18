import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/database";

export class CategoryModel extends Model {
  public id!: number;
  public name!: string;
}

CategoryModel.init(
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
  },
  {
    tableName: "category", // Nombre de la tabla en la base de datos
    sequelize,
  }
);
