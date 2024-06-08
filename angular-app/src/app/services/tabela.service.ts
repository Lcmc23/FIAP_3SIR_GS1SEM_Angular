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

    constructor(private http: HttpClient) { }

    listar(): Observable<todosDados[]>{
        return this.http.get<todosDados[]>(this.apiUrl) as Observable<todosDados[]>;
    }

}