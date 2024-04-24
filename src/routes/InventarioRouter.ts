import express, { Router } from "express";
import InventarioController from "../controllers/InventarioController";

const router: Router = express.Router();

router
    .post("/inventario", InventarioController.criarInventario)
    .get("/inventario", InventarioController.listarInventarios)
    .get("/inventario/:id", InventarioController.buscarInventario)
    .patch("/inventario/:id", InventarioController.atualizarInventario)
    .delete("/inventario/:id", InventarioController.deletarInventario);

export default router;