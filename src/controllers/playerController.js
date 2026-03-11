import * as playerModel from "../models/playerModel.js"

export async function listar(req,res) {
    const players = await playerModel.listarPlayers();
    res.json(players)
}

export async function buscarPorId(req,res) {
    const player = await playerModel.buscarPorId(req.params.id);
    if(!player){
        return res.status(404).json({msg: "Player não encontrado"})
    }

    res.json(player)
}

export async function criar(req,res) {
    const {nickname, plataforma} = req.body;

    if(!nickname || !plataforma){
        return res.status(400).json({msg: "Nickname e plataforma são obrigatórios"})
    }

    const id = await playerModel.criarPlayer({
        nickname,plataforma
    })

     res.status(201).json({
        msg: "Player criado com sucesso",
        id
    })
}

export async function deletar(req, res) {
    try {
        const { id } = req.params;

        const linhasAfetadas = await playerModel.deletarPlayer(id);

        if (linhasAfetadas === 0) {
            return res.status(404).json({ error: "Player não encontrado." });
        }

        return res.status(200).json({ message: "Player removido com sucesso." });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erro interno ao deletar player." });
    }
}

export async function editar(req,res) {
    const {nickname, plataforma} = req.body;
    const id = req.params.id

    if(!nickname || !plataforma){
        return res.status(400).json({msg: "Nickname e plataforma são obrigatórios"})
    }

    const playerAtualizado = await playerModel.atualizarPlayer({
        nickname,plataforma,id
    })

     res.status(200).json({
        msg: "Player atualizado com sucesso",
        id
    })
}