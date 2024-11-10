import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface User {
  id: number;
  name: string;
  email: string;
  username: string;
  password: string;
}

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  user!: User;
  isEditing = false;

  constructor(private http: HttpClient, private router: Router ) {}

  ngOnInit(): void {
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.loadUser(userId);
    } else {
      console.error('No user ID found');
    }
  }

  loadUser(id: string): void {
    this.http.get<User>(`http://localhost:3000/users/${id}`).subscribe(
      (data) => (this.user = data),
      (error) => console.error('Error fetching user data', error)
    );
  }

  toggleEditMode(): void {
    if (this.isEditing && this.user) {
      this.http.put(`http://localhost:3000/users/${this.user.id}`, this.user).subscribe(
        () => console.log('User updated successfully'),
        (error) => console.error('Error updating user', error)
      );
    }
    this.isEditing = !this.isEditing;
  }

  confirmDelete(): void {
    const email = prompt('Confirma tu email para eliminar la cuenta:');
    if (email === this.user?.email) {
      this.http.delete(`http://localhost:3000/users/${this.user.id}`).subscribe(
        () => console.log('User deleted successfully'),
        (error) => console.error('Error deleting user', error)
      );
      
      this.router.navigate(['/login']);
    } else {
      alert('Email incorrecto');
    }
  }
}
