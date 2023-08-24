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
  // public stock!: number;

  // Casandra inmobiliaria
  public image_galery!: string[];
  public type!: string;
  public province!: string;
  public location!: string;
  public ubication!: string;
  public environments!: number;
  public bathrooms!: number;
  public antiquity!: string;
  public status!: string;
  public yard!: boolean;
  public gas!: boolean;
  public cover_m2!: number;
  public total_m2!: number;
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
    // stock: {
    //   type: DataTypes.INTEGER,
    //   allowNull: true,
    // },

    // Canalda Inmobiliaria
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    province: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ubication: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    environments: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bathrooms: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    antiquity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    yard: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    gas: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    image_galery: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: [],
      allowNull: true,
    },
    total_m2: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cover_m2: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
