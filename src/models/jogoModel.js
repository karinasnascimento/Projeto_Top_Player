import { conexao } from "../config/db.js";

export async function listarJogos() {
    const [resultado] = await conexao.query(
        "SELECT id, nome, genero FROM jogos ORDER BY id DESC"
    );
    return resultado
}

export async function buscarPorId(id) {
    const [resultado] = await conexao.query(
        "SELECT id, nome, genero FROM jogos WHERE id = ?",
        [id]
    );
    return resultado[0]
}

export async function criarJogo({nome, genero}) {
    const [resultado] = await conexao.query(
        "INSERT INTO jogos (nome, genero) VALUES (?,?)",
        [nome,genero]
    )
    return resultado.insertId
}

export async function deletarJogo(id) {
    const [resultado] = await conexao.query(
        "DELETE FROM jogos WHERE id = ?",
        [id]
    );
    return resultado.affectedRows;
}

export async function atualizarJogo({nome, genero, id}) {
    const [resultado] = await conexao.query(
        "UPDATE  jogos SET nome=?, genero=? where id = ? ",
        [nome,genero,id]
    )
}