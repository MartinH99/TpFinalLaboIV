import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent implements OnInit {
  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.formulario = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
          ),
        ],
      ],
    });
  }

  ngOnInit(): void { }

  onSubmit() {
    if (this.formulario.valid) {
      console.log('Form Data: ', this.formulario.value);
    } else {
      console.log('Formulario inválido');
      this.formulario.markAllAsTouched();
    }
  }

  guardarUsuario() {
    console.log(this.formulario.value);
  }

  showPassword: boolean = false;

  onClickSiguente() {
    this.showPassword = true;
  }

  login() {
    this.router.navigate(['/login']);
  }


}
