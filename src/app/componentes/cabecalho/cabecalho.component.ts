import { Component } from '@angular/core';
import { HomeComponent } from '../../paginas/home/home.component';
import { SobreComponent } from '../../paginas/sobre/sobre.component';

@Component({
  selector: 'app-cabecalho',
  standalone: true,
  imports: [
    HomeComponent,
    SobreComponent
  ],
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.css'
})
export class CabecalhoComponent {

}
