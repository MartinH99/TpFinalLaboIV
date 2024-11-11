import { User } from './../interfaces/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})


export class RegisterService {
  private baseURL = 'http://localhost:3000/users';

  constructor(private http: HttpClient, private router: Router) {}

  getUsers(): Observable<any> {
    return this.http.get(this.baseURL); 
    
  }

  addUser(user: User): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http.post(this.baseURL, user, httpOptions);
  }
}
