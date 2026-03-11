import { Router } from "express";
import * as playerController from "../controllers/playerController.js"

const router = Router()

router.get("/", playerController.listar);
router.get("/:id", playerController.buscarPorId);
router.post("/", playerController.criar);
router.delete("/:id", playerController.deletar);
router.put("/:id", playerController.editar);

export default router