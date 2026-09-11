import RepositoryCliente from "../repository/clientes.js"

class ServiceCliente {

    async Buscar() {
        return RepositoryCliente.find()
    }

    async Detalhe(id) {
        if(!id) {
            throw new Error("Favor informar o ID")
        }

        const cliente = await RepositoryCliente.findById(id)
        
        if(!cliente) {
            throw new Error(`ID ${id} do carro não encontrado`)
        }

        return cliente
    }

    async Criar(nome, telefone) {
         if (!nome || !telefone) {
             throw new Error("Favor informar todos os dados")
         }
         const cliente = await RepositoryCliente.Create( nome, telefone )

         return cliente
    }

    async Alterar(id, nome, telefone) {
        if (!id || !nome || !telefone) {
            throw new Error("Favor informar os dados");
        }

        const clienteAlterado = await RepositoryCliente.Update(id, nome, telefone)

        return clienteAlterado
    }

    async Deletar(id) {

        if (!id) {
            throw new Error("Favor informar o ID")
        }
        
        const cliente = await RepositoryCliente.Delete(id)

        return cliente
    }

}

export default new ServiceCliente()