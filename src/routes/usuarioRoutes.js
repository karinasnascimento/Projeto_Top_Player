import { Router } from "express";
import * as usuarioController from "../controllers/usuarioController.js"

const router = Router()

router.post("/login", usuarioController.login);
router.get("/", usuarioController.listar);
router.get("/:id", usuarioController.buscarPorId);
router.post("/", usuarioController.criar);
router.delete("/:id", usuarioController.deletar);

export default router