import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Thought from 'src/app/Thought';
import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ThoughtService {
  private readonly API = 'http://localhost:3000/thought';

  constructor(private http: HttpClient) {}

  // Lista o array de thought
  list(page: number): Observable<Thought[]> {
    // GET posts?_page=7&_limit=20
    const itemsForPage = 6;
    return this.http.get<Thought[]>(`${this.API}?_page=${page}&_limit=${itemsForPage}`); // Paginator
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

  // Procura um thought pelo ID
  searchId(id: number): Observable<Thought> {
    const url = `${this.API}/${id}`;
    return this.http.get<Thought>(url);
  }
}
