import Processo from "../abstracoes/processo";
import MenuTipoEditarClientes from "../menus/menuTipoEditarClientes";
import CadastroClienteDependente from "./cadastroClienteDependente";
import CadastroClienteTitular from "./cadastroClienteTitular";
import EditarCliente from "./editarCliente";

export default class TipoEditarCliente extends Processo {
    constructor() {
        super()
        this.menu = new MenuTipoEditarClientes()
    }
    processar(): void {
        this.processo = new EditarCliente();
        this.processo.processar();
    }
}