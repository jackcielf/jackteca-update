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

  constructor(private service: ThoughtService) {}

  ngOnInit(): void {
    this.service.list(this.pageCurrent).subscribe((listThought) => {
      this.listThoughts = listThought;
    });
  }
}
