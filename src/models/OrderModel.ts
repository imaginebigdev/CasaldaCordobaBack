import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/database";

interface Product {
  id: string;
  name: string;
}

export class OrderModel extends Model {
  public id!: number;
  public paymentId!: string;
  public products!: Product[];
  public clientName!: string;
  public address!: string;
  public province!: string;
  public postalCode!: number;
  public phone!: number;
  public email!: string;
  public succesfull!: boolean;
  public pending!: boolean;
}

OrderModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,

      primaryKey: true,
    },
    paymentId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    products: {
      type: DataTypes.ARRAY(DataTypes.JSONB),
      defaultValue: [],
      allowNull: false,
    },
    clientName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    province: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postalCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    succesfull: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    pending: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    tableName: "order", // Nombre de la tabla en la base de datos
    sequelize,
  }
);
