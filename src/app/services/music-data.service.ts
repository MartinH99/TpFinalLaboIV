import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MusicDataService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getWorldTop(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/worldTop`);
  }

  getPopularArtists(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/popularArtists`);
  }
}
