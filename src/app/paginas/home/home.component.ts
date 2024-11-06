import { Component } from '@angular/core';
import { RodapeComponent } from '../../componentes/rodape/rodape.component';
import { CabecalhoComponent } from '../../componentes/cabecalho/cabecalho.component';
import { SobreComponent } from '../sobre/sobre.component';
import { RouterLink } from '@angular/router';
import { PesquisaComponent } from '../pesquisa/pesquisa.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RodapeComponent,
    CabecalhoComponent,
    SobreComponent,
    RouterLink,
    PesquisaComponent,
    SobreComponent,
  
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
