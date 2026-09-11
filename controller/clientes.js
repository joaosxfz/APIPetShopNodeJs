import ServiceCliente from '../service/service.js'

class ControllerCliente {

    async Buscar(res) {
        try {
            const carros = await ServiceCliente.Buscar()
            res.status(200).send({ mensagem: carros })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    async Detalhe(req, res) {
        try {
            const id = req.params.id

            const carro = await ServiceCliente.Detalhe(id)

            res.status(200).send({ mensagem: carro })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    async Criar(req, res) {
        try {
            const { nome, telefone } = req.body

            await ServiceCliente.Criar(nome, telefone)

            res.status(201).send({ mensagem: "Cadastrado com sucesso" })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    async Alterar(req, res) {
        try {
            const { nome, telefone } = req.body
            const id = req.params.id

            await ServiceCliente.Alterar(id, nome, telefone)

            res.status(201).send({ mensagem: "Cadastrado com sucesso" })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    async Deletar(req, res) {
        try {
            const identificador = req.params.id

            await ServiceCliente.Deletar(identificador)

            res.status(204).send({ mensagem: "Deletado" })
        } catch (error) {

            res.status(500).send({
                mensagem: error.message
            })
        }
    }
}

export default new ControllerCliente()