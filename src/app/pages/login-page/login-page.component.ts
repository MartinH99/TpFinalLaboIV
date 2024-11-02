import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
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
    if (this.loginForm.valid) {
      console.log('Datos de login:', this.loginForm.value);
      this.login();
    } else {
      alert('Por favor, completa todos los campos requeridos correctamente.');
    }
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
