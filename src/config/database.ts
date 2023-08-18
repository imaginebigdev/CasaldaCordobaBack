import dotenv from "dotenv";
import { Dialect, Sequelize } from "sequelize";

dotenv.config();

interface DatabaseConfig {
  development: {
    dialect: string;
    host: string;
    database: string;
    username: string;
    password: string;
  };
  test: {
    dialect: string;
    host: string;
    database: string;
    username: string;
    password: string;
  };
  production: {
    dialect: string;
    host: string;
    database: string;
    username: string;
    password: string;
  };
}

const env = process.env.NODE_ENV || "development";

const config: DatabaseConfig = {
  development: {
    dialect: "postgres",
    host: "localhost",
    database: process.env.DB_NAME || "nombre_de_la_db_dev",
    username: process.env.DB_USERNAME || "tu_usuario_dev",
    password: process.env.DB_PASSWORD || "tu_contraseña_dev",
  },
  test: {
    dialect: "postgres",
    host: "localhost",
    database: process.env.DB_NAME || "nombre_de_la_db_test",
    username: process.env.DB_USERNAME || "tu_usuario_test",
    password: process.env.DB_PASSWORD || "tu_contraseña_test",
  },
  production: {
    dialect: "postgres",
    host: "localhost",
    database: process.env.DB_NAME || "nombre_de_la_db_prod",
    username: process.env.DB_USERNAME || "tu_usuario_prod",
    password: process.env.DB_PASSWORD || "tu_contraseña_prod",
  },
};

const dbConfig = config[env as keyof DatabaseConfig];

if (!dbConfig) {
  throw new Error(`Invalid environment: ${env}`);
}

export const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    dialect: dbConfig.dialect as Dialect,
    host: dbConfig.host,
  }
);
