import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  forgotPasswordForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';
  attemptCount: number = 0;
  maxAttempts: number = 3;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      securityAnswer: ['', [Validators.required, Validators.maxLength(4)]]
    });
  }

  onSubmit() {
    const { email, securityAnswer } = this.forgotPasswordForm.value;
    this.http.get<any[]>('http://localhost:3000/users').subscribe(users => {
      const user = users.find(user => user.email === email);
      if (user) {
        if (user.isBlocked) {
          this.errorMessage = 'Usuario bloqueado. No puedes intentar recuperar la contraseña nuevamente.';
          this.successMessage = '';
          return;
        }
        if (user.securityAnswer === securityAnswer) {
          this.successMessage = `Tu contraseña es: ${user.password}`;
          this.errorMessage = '';
          this.attemptCount = 0;
        } else {
          this.attemptCount++;
          if (this.attemptCount >= this.maxAttempts) {
            user.isBlocked = true;
            this.http.put(`http://localhost:3000/users/${user.id}`, user).subscribe(() => {
              this.errorMessage = 'Usuario bloqueado después de 3 intentos fallidos.';
            });
          } else {
            this.errorMessage = 'Correo o respuesta de seguridad incorrectos';
          }
          this.successMessage = '';
        }
      } else {
        this.errorMessage = 'Usuario no encontrado';
        this.successMessage = '';
      }
    });
  }

  login() {
    this.router.navigate(['/login']);
  }
}
