import { Component, OnInit } from '@angular/core';
import Thought from 'src/app/Thought';
import { ThoughtService } from '../thoughts/thought.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-thought',
  templateUrl: './edit-thought.component.html',
  styleUrls: ['./edit-thought.component.css'],
})
export class EditThoughtComponent implements OnInit {
  thought: Thought = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: '',
  };

  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.searchId(Number(id)).subscribe((thought) => {
      this.thought = thought;
    });
  }

  editThought(): void {
    this.service.edit(this.thought).subscribe(() => {
      this.router.navigate(['/list-thought']);
    });
  }
  cancelThought(): void {
    this.router.navigate(['/list-thought']);
  }
}
