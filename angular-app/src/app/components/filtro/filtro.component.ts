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

   listar(): void{
     this.tabelaService.listar().subscribe((item) => (this.infos = item));
     this.regioes = this.filtroService.distinctData(this.infos, 0);
     this.species = this.filtroService.distinctData(this.infos, 1);
     this.status = this.filtroService.distinctData(this.infos, 2);
   }

   filtrar(): void {
    this.listaFiltrada = this.tabelaService.calcularDados(this.infos) // Retorno do método calcularDados retorna a lista filtrada
    // Não sobscrever os dados da lista infos que está no filtro componente (nesta classe) porque toda vez que o usuário filtrar algo diferente ele precisa fazer o filtro na lista original
    console.log(this.listaFiltrada); // Pode apagar, aqui é só para vc ver o console do google com a lista filtrada
   }

  ngOnInit(): void {
    this.listar();
  }
}
