import { FiltroService } from './../../services/filtro.service';
import { Component, OnInit } from '@angular/core';
import { todosDados } from '../../interface/todosDados';
import { TabelaService } from '../../services/tabela.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tabela',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabela.component.html',
  styleUrl: './tabela.component.css'
})
export class TabelaComponent implements OnInit {
  infos: todosDados[] = []
  novaLista: todosDados[] = []
  subscription: Subscription | null = null;

   constructor(private tabelaService: TabelaService){ }

   listar(): void{
     this.tabelaService.listar().subscribe((item) => (this.infos = item));
   }

  ngOnInit(): void {
    this.listar();

    this.subscription = this.tabelaService.listaFiltrada$.subscribe(listaFiltrada => {
      this.infos = listaFiltrada;
      this.atualizarTabela();
    });
  }

  atualizarTabela(): void {}

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
