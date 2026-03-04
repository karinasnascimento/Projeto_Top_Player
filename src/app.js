// const express = require("express");
import express from "express";
import cors from "cors";
import usuarioRoutes from "./routes/usuarioRoutes.js"

const app = express();
app.use(express.json()); // Formato JSON
app.use(cors()); // Deixa o back conectar com o front

app.get("/", (req,res) => {
    res.json({msg: "Hello World"})
})

app.use("/usuarios", usuarioRoutes);

export default app