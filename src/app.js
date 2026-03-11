// const express = require("express");
import express from "express";
import cors from "cors";

import usuarioRoutes from "./routes/usuarioRoutes.js"
import jogoRoutes from "./routes/jogoRoutes.js"
import playerRoutes from "./routes/playerRoutes.js"

const app = express();
app.use(express.json()); // Formato JSON
app.use(cors()); // Deixa o back conectar com o front

app.get("/", (req,res) => {
    res.json({msg: "Hello World"})
})

app.use("/usuarios", usuarioRoutes);
app.use("/jogos", jogoRoutes);
app.use("/players", playerRoutes);

export default app