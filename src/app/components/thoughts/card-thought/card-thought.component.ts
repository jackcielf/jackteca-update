import { Component, Input } from '@angular/core';
import Thought from 'src/app/Thought';
@Component({
  selector: 'app-card-thought',
  templateUrl: './card-thought.component.html',
  styleUrls: ['./card-thought.component.css'],
})
export class CardThoughtComponent {
  @Input() thought: Thought = {
    conteudo: '',
    autoria: '',
    modelo: '',
    favorito: false,
  };

  constructor() {}

  ngOnInit(): void {}

  widthThought(): string {
    if (this.thought.conteudo.length >= 256) {
      return 'thought-g';
    }
    return 'thought-p';
  }

  changeIconFavorite(): string {
    if (this.thought.favorito === false) {
      return 'inativo';
    }
    return 'ativo';
  }
}
