import { Component, NgModule } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from "./componentes/cabecalho/cabecalho.component";
import { RodapeComponent } from "./componentes/rodape/rodape.component";
import { PesquisaComponent } from "./paginas/pesquisa/pesquisa.component";
import { SobreComponent } from './paginas/sobre/sobre.component';
import { HomeComponent } from './paginas/home/home.component';
import { ResultadoComponent } from "./paginas/resultado/resultado.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CabecalhoComponent,
    RodapeComponent,
    PesquisaComponent, 
    SobreComponent, 
    HomeComponent,
    ResultadoComponent, 
    RouterLink
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PI-IV-QualidadeDoAr';
}
