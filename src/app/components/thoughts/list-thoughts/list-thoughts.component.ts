import { Component, OnInit } from '@angular/core';
import Thought from 'src/app/Thought';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.css'],
})
export class ListThoughtsComponent implements OnInit {
  listThoughts: Thought[] = [];
  pageCurrent = 1;
  haMoreThoughts = true;
  filtro = '';
  favorites = false;
  listaFavoritos: Thought[] = [];
  title = 'Meu mural';

  constructor(private service: ThoughtService, private router: Router) {}

  ngOnInit(): void {
    this.service
      .list(this.pageCurrent, this.filtro, this.favorites)
      .subscribe((listThought) => {
        this.listThoughts = listThought;
      });
  }

  readMoreThoughts(): void {
    this.service
      .list(++this.pageCurrent, this.filtro, this.favorites)
      .subscribe((listThoughts) => {
        this.listThoughts.push(...listThoughts);
        if (!listThoughts.length) {
          this.haMoreThoughts = false;
        }
      });
  }

  searchThoughts(): void {
    this.haMoreThoughts = true;
    this.pageCurrent = 1;
    this.service
      .list(this.pageCurrent, this.filtro, this.favorites)
      .subscribe((listThoughts) => {
        this.listThoughts = listThoughts;
      });
  }

  listFavorites(): void {
    this.title = 'Meus favoritos';
    this.favorites = true;
    this.haMoreThoughts = true;
    this.pageCurrent = 1;
    this.service
      .list(this.pageCurrent, this.filtro, this.favorites)
      .subscribe((listFavorites) => {
        this.listThoughts = listFavorites;
        this.listaFavoritos = listFavorites;
      });
  }

  // Regarregando um componente, sem recarregar a pagina inteira
  refreshComponent(): void {
    this.favorites = false;
    this.pageCurrent = 1;
    // location.reload(); // Recarrega a pagina atual (DE FORMA ERRADA)
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload'; // Recarrega a pagina atual (DE FORMA CORRETA)
    this.router.navigate([this.router.url]);
  }
}
