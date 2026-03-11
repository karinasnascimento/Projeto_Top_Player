import { Router } from "express";
import * as jogoController from "../controllers/jogoController.js"

const router = Router()

router.get("/", jogoController.listar);
router.get("/:id", jogoController.buscar);
router.post("/", jogoController.criar);
router.delete("/:id", jogoController.deletar);
router.put("/:id", jogoController.editar);

export default router