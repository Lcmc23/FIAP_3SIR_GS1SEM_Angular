import { Component } from '@angular/core';
import { todosDados } from '../../interface/todosDados';
import { TabelaService } from '../../services/tabela.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabela',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabela.component.html',
  styleUrl: './tabela.component.css'
})
export class TabelaComponent {
  infos: todosDados[] = []

   constructor(private tabelaService: TabelaService){ }

   listar(): void{
     this.tabelaService.listar().subscribe((item) => (this.infos = item));
   }

  ngOnInit(): void {
    this.listar();
  }

}
