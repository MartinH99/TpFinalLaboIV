import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map, switchMap } from 'rxjs';
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

  getSongsByMood(mood: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,
    });

    const body = { mood };

    return this.http.post(this.apiUrlProd, body, { headers });
  }

  // getSongsByMood(mood: string): Observable<any> {
  //   return this.http.get<any[]>(`${this.apiUrl}/${mood}`)
  // }

  getWorldTop(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/worldTop`);
  }

  getPopularArtists(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/popularArtists`);
  }

  getPlaylist(userId: string): Observable<any[]> {
    return this.http.get<any>(`${this.apiUrl}/users/${userId}`).pipe(
      map(user => user.playlist)
    );
  }

  addToPlaylist(userId: string, song: any): Observable<any> {
    return this.getPlaylist(userId).pipe(
      switchMap(playlist => {
        const updatedPlaylist = [...playlist, song];
        return this.http.patch<any>(`${this.apiUrl}/users/${userId}`, { playlist: updatedPlaylist });
      })
    );
  }

  removeFromPlaylist(userId: string, songId: number): Observable<any> {
    return this.getPlaylist(userId).pipe(
      switchMap(playlist => {
        const updatedPlaylist = playlist.filter(song => song.id !== songId);
        return this.http.patch<any>(`${this.apiUrl}/users/${userId}`, { playlist: updatedPlaylist });
      })
    );
  }
}
