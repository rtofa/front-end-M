// pesquisa.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PesquisaService {
  private baseUrl = 'https://api.exemplo.com'; // AC RYAN SUBSTITUA PELA DA SUA API E SEJA O QUE DEUS QUISER KK

  constructor(private http: HttpClient) {}

  getPaises(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/paises`);
  }

  getEstados(pais: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/estados`, { params: new HttpParams().set('pais', pais) });
  }

  getCidades(estado: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/cidades`, { params: new HttpParams().set('estado', estado) });
  }

  getResultados(pais: string, estado: string, cidade: string): Observable<any[]> {
    let params = new HttpParams().set('pais', pais).set('estado', estado).set('cidade', cidade);
    return this.http.get<any[]>(`${this.baseUrl}/resultados`, { params });
  }
}
