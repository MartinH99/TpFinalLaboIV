import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Notification } from './../../interfaces/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  public isProfileMenuOpen = false;
  public showNotif = false;
  public hasNotifications = true; // Comienza en true para que el círculo se muestre inicialmente

  constructor(private router: Router) {}

  logout() {
    this.router.navigate(['/login']);
  }

  profile() {
    this.router.navigate(['/profile']);
  }

  toggleProfileMenu() {
    // Si el menú de notificaciones está abierto, lo cierra
    if (this.showNotif) {
      this.showNotif = false;
    }
    // Cambia el estado de apertura del menú de perfil
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
  }

  showNotification() {
    // Si el menú de perfil está abierto, lo cierra
    if (this.isProfileMenuOpen) {
      this.isProfileMenuOpen = false;
    }
    // Abre el menú de notificaciones y desactiva el indicador de notificación
    this.showNotif = true;
    this.hasNotifications = false;
  
    // Ocultar automáticamente el toast después de unos segundos
    setTimeout(() => {
      this.showNotif = false;
    }, 6000); // Duración en milisegundos
  }


  notifications: Notification[] = [
    { id: 1, title: 'New Release Alert!', message: 'Your favorite artist Milo J just dropped a new single: "Vida De Rock". Check it out now!' },
    { id: 2, title: 'Concert Reminder', message: 'Don\'t forget about Milo J\'s concert tomorrow at 8 PM!' },
    { id: 3, title: 'Playlist Update', message: 'Your "Favorites" playlist has been updated with the latest tracks.' }
  ];

  // Función para ocultar una notificación específica
  hideNotification(notificationId: number) {
    this.notifications = this.notifications.filter(notif => notif.id !== notificationId);
  }
}
