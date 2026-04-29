import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDto } from '../../features/auth/models/LoginDto';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private router = inject(Router);

  // 1. La función que recibe los datos del formulario
  login(credenciales: LoginDto) {
    // Aquí definimos cuál es el usuario válido
    if (credenciales.email === 'usuario@correo.com' && credenciales.password === '123456') {
      
      // ¡Credenciales correctas! Le ponemos el brazalete VIP guardándolo en el navegador
      localStorage.setItem('token_acceso', 'brazalete-vip-activo');
      
      // Lo empujamos hacia adentro del restaurante
      this.router.navigate(['/inicio']); 
      
    } else {
      // Credenciales falsas: Lo rebotamos con un mensaje
      alert('Correo o contraseña incorrectos. ¡Intenta de nuevo!'); 
    }
  }

  // 2. La función que usa tu Guardián (Cadenero) para revisar la puerta
  isAuthenticated(): boolean {
    // Revisa si el usuario tiene el brazalete VIP guardado
    const token = localStorage.getItem('token_acceso');
    
    if (token) {
      return true; // Lo deja pasar
    } else {
      return false; // Le niega la entrada
    }
  }

  // 3. (Opcional por ahora) Para cuando quieras cerrar sesión
  logout() {
    localStorage.removeItem('token_acceso'); // Le arrancamos el brazalete
    this.router.navigate(['/login']); // Lo echamos a la calle
  }
}