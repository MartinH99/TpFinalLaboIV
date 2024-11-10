import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  getFieldError(field: string): string | null {
    const control = this.loginForm.get(field);
    if (control?.touched && control.errors) {
      if (control.errors['required']) return 'Este campo es obligatorio';
      if (control.errors['email']) return 'Correo electrónico inválido';
      if (control.errors['minlength']) return 'Contraseña muy corta';
    }
    return null;
  }

  onLogin() {
    this.errorMessage = null;

    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      this.authService.login(email, password).subscribe(
        user => {
          if (user) {
            localStorage.setItem('userId', user.id);
            this.login();
          } else {
            this.showError('¡Usuario y/o contraseña incorrectos!');
          }
        },
        () => {
          this.showError('¡Hubo un error en el servidor! Por favor, inténtalo de nuevo más tarde.');
        }
      );
    } else {
      this.showError('¡Completa todos los campos requeridos!');
    }
  }

  showError(message: string) {
    this.errorMessage = message;
    setTimeout(() => {
      this.errorMessage = null;
    }, 3000);
  }

  clearError() {
    this.errorMessage = null;
  }

  register() {
    this.router.navigate(['/register']);
  }

  login() {
    this.router.navigate(['/home']);
  }

  forgotPassword() {
    this.router.navigate(['/forgot']);
  }
}
