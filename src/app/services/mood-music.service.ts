import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoodMusicService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getSongsByMood(mood: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${mood}`).pipe(
      map((response: any) => {
        if (Array.isArray(response)) {
          return response;
        } else {
          console.error('Respuesta inesperada:', response);
          return [];
        }
      })
    );
  }
}
