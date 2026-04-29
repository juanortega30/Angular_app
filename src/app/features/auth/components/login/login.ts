import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../../core/auth/auth.services';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule], // Le damos superpoderes de formularios a este componente
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);

  // Creamos la estructura de validación del formulario
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  // Esta función se activa al hacer clic en "Entrar"
  entrar() {
    if (this.loginForm.valid) {
      // Si llenó todo bien, empacamos los datos y se los mandamos al servicio
      const datos = {
        email: this.loginForm.value.email || '',
        password: this.loginForm.value.password || ''
      };
      this.authService.login(datos);
    } else {
      alert('Por favor, llena correctamente tu correo y contraseña.');
    }
  }
}
