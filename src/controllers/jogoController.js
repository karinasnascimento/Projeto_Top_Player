import * as jogoModel from "../models/jogoModel.js"

export async function listar(req,res) {
    const jogos = await jogoModel.listarJogos();
    res.json(jogos)
}

export async function buscar(req,res) {
    const jogo = await jogoModel.buscarPorId(req.params.id);
    if(!jogo){
        return res.status(404).json({msg: "Jogo não encontrado"})
    }

    res.json(jogo)
}

export async function criar(req,res) {
    const {nome, genero} = req.body;

    if(!nome || !genero){
        return res.status(400).json({msg: "Nome e gênero são obrigatórios"})
    }

    const id = await jogoModel.criarJogo({
        nome,genero
    })

     res.status(201).json({
        msg: "Jogo criado com sucesso",
        id
    })
}

export async function deletar(req, res) {
    try {
        const { id } = req.params;

        const linhasAfetadas = await jogoModel.deletarJogo(id);

        if (linhasAfetadas === 0) {
            return res.status(404).json({ error: "Jogo não encontrado." });
        }

        return res.status(200).json({ message: "Jogo removido com sucesso." });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erro interno ao deletar jogo." });
    }
}

export async function editar(req,res) {
    const {nome, genero} = req.body;
    const id = req.params.id

    if(!nome || !genero){
        return res.status(400).json({msg: "Nome e gênero são obrigatórios"})
    }

    const jogoAtualizado = await jogoModel.atualizarJogo({
        nome,genero,id
    })

     res.status(200).json({
        msg: "Jogo atualizado com sucesso",
        id
    })
}