import Menu from "../interfaces/menu";

export default class MenuTipoDeletarClientes implements Menu {
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| Qual cliente deseja deletar? `)
        console.log(`----------------------`)
    }
}