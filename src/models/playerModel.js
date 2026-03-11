import { conexao } from "../config/db.js";

export async function listarPlayers() {
    const [resultado] = await conexao.query(
        "SELECT id, nickname, plataforma, criado_em FROM players ORDER BY id DESC"
    );
    return resultado
}

export async function buscarPorId(id) {
    const [resultado] = await conexao.query(
        "SELECT id, nickname, plataforma, criado_em FROM players WHERE id = ?",
        [id]
    );
    return resultado[0]
}

export async function criarPlayer({nickname, plataforma}) {
    const [resultado] = await conexao.query(
        "INSERT INTO players (nickname, plataforma) VALUES (?,?)",
        [nickname,plataforma]
    )
    return resultado.insertId
}

export async function deletarPlayer(id) {
    const [resultado] = await conexao.query(
        "DELETE FROM players WHERE id = ?",
        [id]
    );

    return resultado.affectedRows;
}

export async function atualizarPlayer({nickname, plataforma,id}) {
    const [resultado] = await conexao.query(
        "UPDATE  players SET nickname=?, plataforma=? where id = ? ",
        [nickname,plataforma,id]
    )
}