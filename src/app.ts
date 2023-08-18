import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { sequelize } from "./config/database";
import productRoutes from "./routes/productRoutes";
import categoryRoutes from "./routes/categoryRoutes";
import morgan = require("morgan");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4001;
const env = process.env.NODE_ENV || "development";

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/properties", productRoutes);
app.use("/categories", categoryRoutes);

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexión a la base de datos establecida correctamente.");

    // poner en "force: false" en caso de no querer eliminar todos los datos cargados cada vez que se actualiza
    await sequelize.sync({ force: false, logging: false });
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT} en modo ${env}`);
    });
  } catch (error) {
    console.error("Error al conectar con la base de datos:", error);
  }
})();
