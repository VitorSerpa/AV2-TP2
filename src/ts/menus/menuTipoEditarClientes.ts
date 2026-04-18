import Menu from "../interfaces/menu";

export default class MenuTipoEditarClientes implements Menu {
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| Qual cliente deseja editar? `)
        console.log(`----------------------`)
    }
}