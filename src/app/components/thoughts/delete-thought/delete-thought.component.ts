import { Component, OnInit } from '@angular/core';
import { ThoughtService } from '../thought.service';
import { ActivatedRoute, Router } from '@angular/router';
import Thought from 'src/app/Thought';

@Component({
  selector: 'app-delete-thought',
  templateUrl: './delete-thought.component.html',
  styleUrls: ['./delete-thought.component.css'],
})
export class DeleteThoughtComponent implements OnInit {
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
    // Pegando o ID da url e 'salvando' na sessão
    const id = this.route.snapshot.paramMap.get('id');
    this.service.searchId(Number(id)).subscribe((thought) => {
      this.thought = thought;
    });
  }

  // Função para deletar o thought e mudar de tela
  deleteThought(): void {
    if (this.thought.id) {
      console.log(this.thought.id);
      this.service.delete(this.thought.id).subscribe(() => {
        this.router.navigate(['/list-thought']);
      });
    }
  }

  // Cancela a confirmação de exclusão mudando de rota
  cancel(): void {
    this.router.navigate(['/list-thought']);
  }
}
