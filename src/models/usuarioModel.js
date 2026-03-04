import { conexao } from "../config/db.js";

export async function listarUsuarios() {
    const [resultado] = await conexao.query(
        "SELECT id, nome, email, criado_em FROM usuarios ORDER BY id DESC"
    );
    return resultado
}

export async function buscarPorId(id) {
    const [resultado] = await conexao.query(
        "SELECT id, nome, email, criado_em FROM usuarios WHERE id = ?",
        [id]
    );
    return resultado[0]
}

export async function criarUsuario({nome, email, senha_hash}) {
    const [resultado] = await conexao.query(
        "INSERT INTO usuarios (nome, email, senha_hash) VALUES (?,?,?)",
        [nome,email,senha_hash]
    )
    return resultado.insertId
}

export async function buscarUsuarioPorEmail(email) {
    const [resultado] = await conexao.query(
        "SELECT id, nome, email, criado_em FROM usuarios WHERE email = ?",
        [email]
    );
    return resultado[0]
}