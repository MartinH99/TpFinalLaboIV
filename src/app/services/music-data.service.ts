import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { environmentProd } from '../../environments/environment.prod'

@Injectable({
  providedIn: 'root'
})
export class MusicDataService {
  private apiUrl = environment.apiUrl;
  private apiUrlProd = environmentProd.apiUrl;
  private token = environmentProd.token;

  constructor(private http: HttpClient) { }

  /* Con la API pública. */
  // getSongsByMood(mood: string): Observable<any> {
  //   const headers = new HttpHeaders({
  //     'Authorization': `Bearer ${this.token}`,
  //   });

  //   const body = { mood };

  //   return this.http.post(this.apiUrlProd, body, { headers });
  // }
  /* /. Con la API pública. */

  getSongsByMood(mood: string): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}/${mood}`)
  }

  getWorldTop(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/worldTop`);
  }

  getPopularArtists(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/popularArtists`);
  }

  getPlaylist(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/playlist`);
  }

  addToPlaylist(song: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/playlist`, song);
  }

  removeFromPlaylist(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/playlist/${id}`);
  }
}
