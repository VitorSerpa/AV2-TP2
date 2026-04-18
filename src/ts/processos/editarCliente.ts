import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";

export default class EditarCliente extends Processo {
    processar(): void {
        console.log('Edição de cliente...');

        let nome = this.entrada.receberTexto('Nome do cliente:');
        let armazem = Armazem.InstanciaUnica;

        let cliente = armazem.Clientes.find(c => c.Nome === nome);

        if (!cliente) {
            console.log('Cliente não encontrado!');
            return;
        }

        let opcao = this.entrada.receberNumero(`
1 - Nome
2 - Nome social
3 - Data de nascimento
0 - Sair
`);

        switch (opcao) {
            case 1:
                cliente.Nome = this.entrada.receberTexto('Novo nome:');
                break;

            case 2:
                cliente.NomeSocial = this.entrada.receberTexto('Novo nome social:');
                break;

            case 3:
                cliente.DataNascimento = this.entrada.receberData('Nova data:');
                break;

            case 0:
                return;

            default:
                console.log('Opção inválida');
        }

        console.log('Cliente atualizado!');
    }
}