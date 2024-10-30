import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  forgotPasswordForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      securityAnswer: ['', Validators.required]
    });
  }

  onSubmit() {
    const { email, securityAnswer } = this.forgotPasswordForm.value;

    this.http.get<any[]>('http://localhost:3000/users').subscribe(users => {
      const user = users.find(user => user.email === email && user.securityAnswer === securityAnswer);

      if (user) {
        this.successMessage = 'Tu contraseña es: ${user.password}';
        this.errorMessage = '';
      } else {
        this.errorMessage = 'Correo o respuesta de seguridad incorrectos';
        this.successMessage = '';
      }
    });
  }
}