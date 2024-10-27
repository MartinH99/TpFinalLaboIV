import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  public isProfileMenuOpen = false;

  constructor(private router: Router) { }

  logout() {
    this.router.navigate(['/login']);
  }

  profile() {
    this.router.navigate(['/profile']);
  }

  toggleProfileMenu() {
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
  }
}
