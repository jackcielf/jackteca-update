import { Component, OnInit } from '@angular/core';
import Thought from 'src/app/Thought';
import { ThoughtService } from '../thought.service';

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

  constructor(private service: ThoughtService) {}

  ngOnInit(): void {
    this.service
      .list(this.pageCurrent, this.filtro)
      .subscribe((listThought) => {
        this.listThoughts = listThought;
      });
  }

  readMoreThoughts(): void {
    this.service
      .list(++this.pageCurrent, this.filtro)
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
      .list(this.pageCurrent, this.filtro)
      .subscribe((listThoughts) => {
        this.listThoughts = listThoughts;
      });
  }
}
