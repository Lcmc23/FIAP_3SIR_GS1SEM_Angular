import { Especie } from "./especie";
import { projetoConservacao } from "./projetoConservacao";

export interface todosDados {
    regiao: string;
    temperaturaAgua: number;
    pH: number;
    nivelPoluicao: string;
    especies: Especie[];
    projetosConservacao: projetoConservacao[];
}
