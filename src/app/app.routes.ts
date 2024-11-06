import { provideHttpClient } from '@angular/common/http';
import { Routes, provideRouter } from '@angular/router';
//import { bootstrapApplication } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

// Componentes e serviços
import { AppComponent } from './app.component';
import { PesquisaComponent } from './paginas/pesquisa/pesquisa.component';
import { ResultadoComponent } from './paginas/resultado/resultado.component';
import { HomeComponent } from './paginas/home/home.component';
import { SobreComponent } from './paginas/sobre/sobre.component';

// Configuração das rotas
export const routes: Routes = [
  { path: 'home', component: HomeComponent }, // Página inicial
  { path: 'pesquisa', component: PesquisaComponent }, // Página de pesquisa
  { path: 'resultados', component: ResultadoComponent }, // Página de resultados
  { path: 'sobre', component: SobreComponent }, // Página de resultados

  {path:'',
    redirectTo:'home',
    pathMatch:'full'
  }
];

/* Inicialização da aplicação
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    ReactiveFormsModule  // Adicione ReactiveFormsModule  aqui
  ]
}*);*/
