import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import ImpressaorCliente from "../impressores/impressorCliente";
import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";

export default class DeletarClientePorNome extends Processo {
    private clientes: Cliente[]

    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }

    processar(): void {
        console.clear()
        console.log('Deleção de cliente por nome')

        const nome = this.entrada.receberTexto('Digite o nome do cliente: ')

        const indice = this.clientes.findIndex(c => c.Nome === nome)

        if (indice === -1) {
            console.log('Cliente não encontrado.')
            return
        }

        const cliente = this.clientes[indice]

        if (cliente.Titular) {
            const titular = cliente.Titular
            titular.Dependentes.splice(
                titular.Dependentes.indexOf(cliente),
                1
            )
        }

        cliente.Dependentes.forEach(dep => {
            (dep as any).titular = undefined
        })

        this.clientes.splice(indice, 1)

        console.log('Cliente removido com sucesso.')
    }
}