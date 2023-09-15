import { Component, OnInit } from '@angular/core';
// import Thought from '../../../Thought';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css'],
})
export class CreateThoughtComponent implements OnInit {
  form: any;

  constructor(
    private service: ThoughtService,
    private router: Router,
    private formBuilder: FormBuilder /* Usado para a validação */
  ) {}

  ngOnInit(): void {
    /* Usado para a validação */
    this.form = this.formBuilder.group({
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
      modelo: ['modelo1'],
    });
  }

  createThought(): void {
    console.log(this.form.get('autoria')?.errors);
    if (this.form.valid) {
      this.service.create(this.form.value).subscribe(() => {
        this.router.navigate(['/list-thought']);
      });
    }
  }

  cancelThought(): void {}

  habilitarButton(): string {
    if (this.form.valid) {
      return 'botao';
    } else {
      return 'botao__desabilitado';
    }
  }
}
