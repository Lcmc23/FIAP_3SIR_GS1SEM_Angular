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
  regioes: string[] = []
  species: string[] = []
  status: string[] = []

   constructor(private tabelaService: TabelaService, private filtroService: FiltroService){ }

   listar(): void{
     this.tabelaService.listar().subscribe((item) => (this.infos = item));
     this.regioes = this.filtroService.distinctRegiao(this.infos);
     this.species = this.filtroService.distinctSpecie(this.infos);
     this.status = this.filtroService.distinctStatus(this.infos);

   }

  ngOnInit(): void {
    this.listar();
  }
}
