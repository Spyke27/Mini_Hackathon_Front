import Grupo from "./Grupo";

interface Projeto {
    id: number,
    nomeProjeto: string,
    logoProjeto: string,
    linkProjeto: string,
    pitProjeto: string,
    grupo?: Grupo | null,
}
export default Projeto;