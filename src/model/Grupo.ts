import Projeto from "./Projeto";

interface Grupo {
    id: number,
    numeroGrupo: number,
    maisInfos: string,
    projeto?: Projeto | null,
}
export default Grupo;