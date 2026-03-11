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
        "SELECT id, nome, email, senha_hash, criado_em FROM usuarios WHERE email = ?",
        [email]
    );
    return resultado[0]
}

export async function deletarUsuario(id) {
    const [resultado] = await conexao.query(
        "DELETE FROM usuarios WHERE id = ?",
        [id]
    );
    // O mysql retorna as linhas afetadas
    return resultado.affectedRows;
}

export async function atualizarUsuario({nome, email, senha_hash,id}) {
    const [resultado] = await conexao.query(
        "UPDATE  usuarios SET nome=?,email= ?, senha_hash=? where id = ? ",
        [nome,email,senha_hash,id]
    )
}