import clientes from '../model/clientes.js'

class RepositoryCliente {

    async find() {
        const cliente = await captureOwnerStack.findAll()

        return cliente
    }

    async findById(id) {
        const clienteDetalhe = await clientes.findByPk(id)

        return clienteDetalhe
    }

    async Create(nome, telefone) {
        const clienteCreate = await clientes.create({ nome, telefone })

        return clienteCreate
    }

    async Update(id, nome, telefone) {
        const clienteAlterar = await clientes.findByPk(id)

        if (!clienteAlterar) {
            throw new Error ("Cliente não averiguado")
        }

        clienteAlterar.nome = nome
        clienteAlterar.telefone = telefone

        await clienteAlterar.save()

        return clienteAlterar
    }

    async Delete(id) {
        const clienteDeletar = await clientes.findByPk(id)

        if (!clienteDeletar) {
            throw new Error ("Cliente não encontrado")
        }

        await clienteDeletar.destroy()
        return clienteDeletar
    }
}

export default RepositoryCliente