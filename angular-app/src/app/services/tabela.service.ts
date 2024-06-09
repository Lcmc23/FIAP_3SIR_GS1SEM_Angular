import { FiltroService } from './filtro.service';
import { FiltroComponent } from './../components/filtro/filtro.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { todosDados } from '../interface/todosDados';

@Injectable({
    providedIn: 'root'
})
export class TabelaService {
    
    private apiUrl = 'https://fiap-3sis-gs-20241.azurewebsites.net/OceanData'

    infos: todosDados[] = []

    constructor(private http: HttpClient, private filtroService: FiltroService) { }

    listar(): Observable<todosDados[]>{
        return this.http.get<todosDados[]>(this.apiUrl) as Observable<todosDados[]>;
    }

    calcularDados(infos: todosDados[]) {
        let dadosFiltro = {
          regiao: document.getElementById('region') as HTMLSelectElement,
          specie: document.getElementById('species') as HTMLSelectElement,
          status: document.getElementById('conservationStatus') as HTMLSelectElement,
          aguaTemp: document.getElementById('waterTemperature') as HTMLInputElement,
          ph: document.getElementById('ph') as HTMLInputElement,
          pollution: document.getElementById('pollutionLevels') as HTMLInputElement
        }
        return this.filtroService.calcularFiltros(infos, dadosFiltro);
       }


}