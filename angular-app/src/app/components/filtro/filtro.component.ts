import { FiltroService } from './../../services/filtro.service';
import { Component } from '@angular/core';
import { todosDados } from '../../interface/todosDados';
import { TabelaService } from '../../services/tabela.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-filtro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filtro.component.html',
  styleUrl: './filtro.component.css'
})
export class FiltroComponent {
  infos: todosDados[] = []
  listaFiltrada: todosDados[] = []
  regioes: string[] = []
  species: string[] = []
  status: string[] = []

   constructor(private tabelaService: TabelaService, private filtroService: FiltroService){ }

  listar(): void {
    this.tabelaService.listar().subscribe((item) => {
      this.infos = item;
      this.regioes = this.filtroService.distinctData(this.infos, 0);
      this.species = this.filtroService.distinctData(this.infos, 1);
      this.status = this.filtroService.distinctData(this.infos, 2);
    });
  }

   filtrar(): void {
    this.listaFiltrada = this.tabelaService.calcularDados(this.infos)
    
     this.tabelaService.atualizarListaFiltrada(this.listaFiltrada);
   }

  ngOnInit(): void {
    this.listar();
  }
}
