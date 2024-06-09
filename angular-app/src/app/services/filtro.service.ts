import { todosDados } from './../interface/todosDados';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FiltroService {

  private apiUrl = 'https://fiap-3sis-gs-20241.azurewebsites.net/OceanData'

  infos: todosDados[] = []
  lista: todosDados[] = []

  constructor(private http: HttpClient) { }

  listar(): Observable<todosDados[]>{
      return this.http.get<todosDados[]>(this.apiUrl) as Observable<todosDados[]>;
  }

  distinctData(infos: todosDados[], tipo: number): string[] {
    let listaDadosFiltrados: string[] = []
    const map: { [key: string]: boolean } = {};
    switch(tipo) {
      case 0:
        listaDadosFiltrados = infos.map(item => item.regiao)
        break;
      case 1:
        listaDadosFiltrados = infos.flatMap(objeto => objeto.especies.map(especie => especie.nome));
        break;
      case 2:
        listaDadosFiltrados = infos.flatMap(objeto => objeto.especies.map(especie => especie.status));
    }
    return listaDadosFiltrados.filter(reg => {
      if(map[reg]) {
        return false;
      } else {
        map[reg] = true;
        return true;
      }
    })
  }

  calcularFiltros(infos: todosDados[], dadosFiltro: any) {
    let novaLista: todosDados[] = [...infos]
    if (dadosFiltro.regiao.value != 'all') {
      novaLista = infos.filter(item => item.regiao == dadosFiltro.regiao.value)
    }
    if (dadosFiltro.specie.value != 'all') {
      novaLista = novaLista.filter(item => item.especies.some(esp => esp.nome == dadosFiltro.specie.value))
    }
    
    if (dadosFiltro.status.value != 'all') {
        novaLista = novaLista.filter(item => item.especies.some(esp => esp.status == dadosFiltro.status.value))
    }
    if (dadosFiltro.aguaTemp.value != '') {
      novaLista = infos.filter(item => item.temperaturaAgua == dadosFiltro.aguaTemp.value)
    }
    if (dadosFiltro.ph.value != '') {
      novaLista = infos.filter(item => item.pH == dadosFiltro.ph.value)
    }
    if (dadosFiltro.pollution.value != '') {
      novaLista = infos.filter(item => item.nivelPoluicao == dadosFiltro.pollution.value)
    }
    this.lista = [...novaLista]
    return novaLista
  }

}
