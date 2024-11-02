import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
// import { environmentProd } from '../../environments/environment.prod'

@Injectable({
  providedIn: 'root'
})
export class MoodMusicService {
  constructor(private http: HttpClient) { }


  /* Para consumir la API real */

  // private apiUrl = environmentProd.apiUrl;
  // private token = environmentProd.token;

  // getSongsByMood(mood: string): Observable<any> {
  //   const headers = new HttpHeaders({
  //     'Authorization': `Bearer ${this.token}`,
  //   });

  //   const body = { mood };

  //   return this.http.post(this.apiUrl, body, { headers });
  // }

  /* /. Para consumir la API real */



  /* Para consumir de JSON SERVER */
  
  private apiUrl = environment.apiUrl;

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

  /* /. Para consumir de JSON SERVER */
}
