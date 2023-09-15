import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import Thought from 'src/app/Thought';
import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ThoughtService {
  private readonly API = 'http://localhost:3000/thought';

  constructor(private http: HttpClient) {}

  // Lista o array de thought
  list(page: number, filtro: string, favoritos: boolean): Observable<Thought[]> {
    // GET posts?_page=7&_limit=20
    const itemsForPage = 6;

    let parametros = new HttpParams()
      .set('_page', page)
      .set('_limit', itemsForPage);

    // A função 'trim()' desconsidera todos os espacos da palavra
    if (filtro.trim().length > 2) {
      parametros = parametros.set('q', filtro);
    } 

    if(favoritos) {
      parametros = parametros.set("favorito", true)
    }

    // return this.http.get<Thought[]>(`${this.API}?_page=${page}&_limit=${itemsForPage}`); // Paginator
    return this.http.get<Thought[]>(this.API, { params: parametros }); // Paginator
  }

  // Cria um thought
  create(thought: Thought): Observable<Thought> {
    // Precisa passar a url e o thought
    return this.http.post<Thought>(this.API, thought);
  }

  // Deleta um thought a partir do ID
  delete(id: number): Observable<Thought> {
    const url = `${this.API}/${id}`;
    return this.http.delete<Thought>(url);
  }

  edit(thought: Thought): Observable<Thought> {
    const url = `${this.API}/${thought.id}`;
    return this.http.put<Thought>(url, thought);
  }

  changeFavorite(thought: Thought): Observable<Thought> {
    thought.favorito = !thought.favorito;
    // const url = `${this.API}/${thought.id}`;
    // return this.http.put<Thought>(url, thought);
    return this.edit(thought);
  }

  // Procura um thought pelo ID
  searchId(id: number): Observable<Thought> {
    const url = `${this.API}/${id}`;
    return this.http.get<Thought>(url);
  }
}
