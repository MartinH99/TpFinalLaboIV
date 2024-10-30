import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoodMusicService {
  private apiUrl = environment.apiUrl;
  private token = environment.token;

  constructor(private http: HttpClient) { }

  getSongsByMood(mood: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,
    });

    const body = { mood };

    return this.http.post(this.apiUrl, body, { headers });
  }
}
