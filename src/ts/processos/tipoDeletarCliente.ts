import Processo from "../abstracoes/processo";
import MenuTipoDeletarClientes from "../menus/menuTipoDeletarClientes";
import MenuTipoListagemClientes from "../menus/menuTipoListagemClientes";
import DeletarClientePorNome from "./deleteCliente";
import ListagemClientes from "./listagemClientes";
import ListagemDependentes from "./listagemDependentes";
import ListagemTitulares from "./listagemTitulares";

export default class TipoDeletarClientes extends Processo {
    constructor(){
        super()
        this.menu = new MenuTipoDeletarClientes()
    }
    
    processar(): void {
        this.menu.mostrar()
        this.processo = new ListagemClientes()
        this.processo.processar()
        this.processo = new DeletarClientePorNome()
        this.processo.processar()
    }
}