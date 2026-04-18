import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import ImpressaorCliente from "../impressores/impressorCliente";
import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";

export default class ListagemDependentes extends Processo {
    private clientes: Cliente[]
    private impressor!: Impressor

    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }

    processar(): void {
        console.clear()
        console.log('Listagem de dependentes por titular')

        const nome = this.entrada.receberTexto('Digite o nome do titular: ')

        const titular = this.clientes.find(c => c.Nome === nome)

        if (!titular) {
            console.log('Cliente não encontrado.')
            return
        }

        if (titular.Dependentes.length === 0) {
            console.log('Este cliente não possui dependentes.')
            return
        }

        console.log(`Dependentes de ${titular.Nome}:`)
        titular.Dependentes.forEach(dep => {
            this.impressor = new ImpressaorCliente(dep)
            console.log(this.impressor.imprimir())
        })
    }
}