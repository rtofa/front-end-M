import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { PesquisaService } from '../../servicos/pesquisa.service';
import { CommonModule } from '@angular/common';
import { RodapeComponent } from '../../componentes/rodape/rodape.component';
import { CabecalhoComponent } from '../../componentes/cabecalho/cabecalho.component';


@Component({
  selector: 'app-pesquisa',
  standalone: true,
  imports:[
    RouterLink,
    CommonModule,
    ReactiveFormsModule,
    RodapeComponent,
    CabecalhoComponent
  ],
  templateUrl: './pesquisa.component.html' ,
  styleUrl: './pesquisa.component.css'
})
export class PesquisaComponent implements OnInit {
  paises: string[] = [];
  estados: string[] = [];
  cidades: string[] = [];
  pesquisaForm: FormGroup;

  constructor(public pesquisaService: PesquisaService, public router: Router) {
    this.pesquisaForm = new FormGroup({
      pais: new FormControl(''),
      estado: new FormControl(''),
      cidade: new FormControl(''),
    });
  }

  ngOnInit() {
    this.carregarPaises();
  }

  carregarPaises() {
    this.pesquisaService.getPaises().subscribe(paises => this.paises = paises);
  }

  carregarEstados() {
    const paisSelecionado = this.pesquisaForm.get('pais')?.value;
    if (paisSelecionado) {
      this.pesquisaService.getEstados(paisSelecionado).subscribe(estados => {
        this.estados = estados;
        this.pesquisaForm.get('estado')?.setValue(''); // Resetar estado
        this.cidades = []; // Limpar cidades
        this.pesquisaForm.get('cidade')?.setValue(''); // Resetar cidade
      });
    }
  }

  carregarCidades() {
    const estadoSelecionado = this.pesquisaForm.get('estado')?.value;
    if (estadoSelecionado) {
      this.pesquisaService.getCidades(estadoSelecionado).subscribe(cidades => {
        this.cidades = cidades;
        this.pesquisaForm.get('cidade')?.setValue(''); // Resetar cidade
      });
    }
  }

  pesquisar() {
    if (this.pesquisaForm.valid) {
      const { pais, estado, cidade } = this.pesquisaForm.value;
      this.router.navigate(['/resultados'], {
        queryParams: { pais, estado, cidade }
      });
    }
  }
}
