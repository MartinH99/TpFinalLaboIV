import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../../services/register.service';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from './../../interfaces/user.model';
import { take } from 'rxjs/operators';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent implements OnInit {
  formulario: FormGroup;
  seccionActual = 1;
  isSubmitting = false;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private registerService: RegisterService,
    private changeDetectorRef: ChangeDetectorRef,
  ) {
    this.formulario = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.maxLength(15)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      securityAnswer: ['', [Validators.required, Validators.minLength(3)]]

    });
  }

  ngOnInit(): void { }

  onClickSiguiente() {
    if (this.formulario.get('name')?.valid && this.formulario.get('email')?.valid) {
      // Verificar si el email ya existe en la base de datos
      this.registerService.getUsers().subscribe({
        next: (users: User[]) => {
          const existingEmail = users.some(
            (user) => user.email === this.formulario.get('email')?.value
          );

          if (existingEmail) {
            // Marcar el campo de email como inválido si ya existe
            this.formulario.get('email')?.setErrors({ emailTaken: true });
          } else {
            // Avanzar a la siguiente sección si no hay errores
            this.seccionActual = 2;
          }
        },
        error: (error: HttpErrorResponse) => {
          console.error('Error fetching users:', error.message);
        },
      });
    } else {
      // Marcar los campos como tocados si no son válidos
      this.formulario.get('name')?.markAsTouched();
      this.formulario.get('email')?.markAsTouched();
    }
  }

  onSubmit() {
    if (this.formulario.valid && !this.isSubmitting) {
      this.isSubmitting = true;

      this.registerService.getUsers().subscribe({
        next: (users: User[]) => {


          // Verificar si ya existe el username
          const existingUsername = users.some(
            (user) => user.username === this.formulario.get('username')?.value
          );


          if (existingUsername) {
            if (existingUsername) {
              this.formulario.get('username')?.setErrors({ usernameTaken: true });
              this.changeDetectorRef.detectChanges();
            }
            this.isSubmitting = false;
            return;
          }


          const maxId = users.reduce((max, user) => {
            const userId = Number(user.id);
            return userId > max ? userId : max;
          }, 0);

          const user: User = {
            id: maxId + 1,
            securityAnswer: this.formulario.get('securityAnswer')?.value,
            name: this.formulario.get('name')?.value,
            username: this.formulario.get('username')?.value,
            email: this.formulario.get('email')?.value,
            password: this.formulario.get('password')?.value,
            isBlocked: false,
            playlist: []

          };

          // Agregar el nuevo usuario
          this.registerService.addUser(user).pipe(take(1)).subscribe({
            next: (response) => {
              //console.log('User registered:', response);
              this.router.navigate(['/login']);
              this.isSubmitting = false;
            },
            error: (error: HttpErrorResponse) => {
              console.error('Error registering user:', error.message);
              this.isSubmitting = false;
            },
          });
        },
        error: (error: HttpErrorResponse) => {
          console.error('Error fetching users:', error.message);
          this.isSubmitting = false;
        },
      });
    } else {
      Object.values(this.formulario.controls).forEach((control) => {
        control.markAsTouched();
      });
    }
  }

  login() {
    this.router.navigate(['/login']);
  }

  getFieldError(field: string): string | null {
    const control = this.formulario.get(field);
    if (control?.touched && control.errors) {
      if (control.errors['required']) return 'Este campo es obligatorio';
      if (control.errors['email']) return 'Correo electrónico inválido';
      if (control.errors['minlength'])
        return `Mínimo ${control.errors['minlength'].requiredLength} caracteres`;
      if (control.errors['maxlength'])
        return `Máximo ${control.errors['maxlength'].requiredLength} caracteres`;
      if (control.errors['usernameTaken']) return 'Username ya está en uso';
      if (control.errors['emailTaken']) return 'Email ya está registrado';
    }
    return null;
  }

}

