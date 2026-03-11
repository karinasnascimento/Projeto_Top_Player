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

export async function excluirUsuario(req, res) {
    try {
        const { id } = req.params;

        const linhasAfetadas = await usuarioModel.deletarUsuario(id);

        if (linhasAfetadas === 0) {
            return res.status(404).json({ mensagem: "Usuário não encontrado." });
        }

        return res.status(200).json({ mensagem: "Usuário deletado com sucesso!" });
    } catch (erro) {
        console.error(erro);
        return res.status(500).json({ mensagem: "Erro ao deletar no servidor." });
    }
}