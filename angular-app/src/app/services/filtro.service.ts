import { Injectable } from '@angular/core';
import { todosDados } from '../interface/todosDados';

@Injectable({
  providedIn: 'root'
})
export class FiltroService {

  constructor() { }

  distinctRegiao(infos: todosDados[]): string[] {
    const listaRegioes = infos.map(reg => reg.regiao)
    const map: { [key: string]: boolean } = {};
    return listaRegioes.filter(reg => {
      if(map[reg]) {
        return false;
      } else {
        map[reg] = true;
        return true;
      }
    })
  }

  distinctSpecie(infos: todosDados[]): string[] {
    const listaSpecies = infos.flatMap(objeto => objeto.especies.map(especie => especie.nome));

    const map: { [key: string]: boolean } = {};
    return listaSpecies.filter(spe => {
      if(map[spe]) {
        return false;
      } else {
        map[spe] = true;
        return true;
      }
    })
  }

  distinctStatus(infos: todosDados[]): string[] {
    const listaSpecies = infos.flatMap(objeto => objeto.especies.map(especie => especie.status));

    const map: { [key: string]: boolean } = {};
    return listaSpecies.filter(spe => {
      if(map[spe]) {
        return false;
      } else {
        map[spe] = true;
        return true;
      }
    })
  }

}
