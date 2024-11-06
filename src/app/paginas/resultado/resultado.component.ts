// resultado.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PesquisaService } from '../../servicos/pesquisa.service';
import { CommonModule } from '@angular/common';
import { RodapeComponent } from '../../componentes/rodape/rodape.component';
import { CabecalhoComponent } from '../../componentes/cabecalho/cabecalho.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-resultado',
  standalone:true,
  imports:[
    RouterLink,
    CommonModule,
    RodapeComponent,
    CabecalhoComponent
  ],
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {
  resultados: any[] = [];
  pais: string | null = '';
  estado: string | null = '';
  cidade: string | null = '';

  constructor(
    private route: ActivatedRoute,
    private pesquisaService: PesquisaService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.pais = params['pais'];
      this.estado = params['estado'];
      this.cidade = params['cidade'];

      if (this.pais && this.estado && this.cidade) {
        this.pesquisaService.getResultados(this.pais, this.estado, this.cidade)
          .subscribe(
            data => this.resultados = data,
            error => console.error('Erro ao carregar resultados:', error)
          );
      }
    });
  }
}
