import { Router } from "express";
import * as usuarioController from "../controllers/usuarioController.js"

const router = Router()

router.post("/login", usuarioController.login);
router.get("/", usuarioController.listar);
router.get("/:id", usuarioController.buscarPorId);
router.post("/", usuarioController.criar);
router.delete("/:id", usuarioController.deletar);
router.put("/:id", usuarioController.editar);

export default router