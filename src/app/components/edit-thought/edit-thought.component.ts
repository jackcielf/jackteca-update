import { Component, OnInit } from '@angular/core';
import Thought from 'src/app/Thought';
import { ThoughtService } from '../thoughts/thought.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-thought',
  templateUrl: './edit-thought.component.html',
  styleUrls: ['./edit-thought.component.css'],
})
export class EditThoughtComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder /* Usado para a validação */
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.form = this.formBuilder.group({
      id: [''],
      conteudo: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
        ]),
      ],
      autoria: [
        '',
        Validators.compose([Validators.required, Validators.minLength(3)]),
      ],
      modelo: [''],
      favorito: [false],
    });

    this.service.searchId(Number(id)).subscribe((thought) => {
      this.form = this.formBuilder.group({
        id: [thought.id],
        conteudo: [
          thought.conteudo,
          Validators.compose([
            Validators.required,
            Validators.pattern(/(.|\s)*\S(.|\s)*/),
          ]),
        ],
        autoria: [
          thought.autoria,
          Validators.compose([Validators.required, Validators.minLength(3)]),
        ],
        modelo: [thought.modelo],
        favorito: [thought.favorito],
      });
    });
  }

  editThought(): void {
    this.service.edit(this.form.value).subscribe(() => {
      this.router.navigate(['/list-thought']);
      console.log(this.form);
    });
  }

  cancelThought(): void {
    this.router.navigate(['/list-thought']);
  }

  habilitarButton(): string {
    if (this.form.valid) {
      return 'botao';
    } else {
      return 'botao__desabilitado';
    }
  }
}
