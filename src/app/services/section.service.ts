import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SectionService {
  private activeSectionSubject = new BehaviorSubject<string>('todos');
  activeSection$ = this.activeSectionSubject.asObservable();

  private playlistSubject = new BehaviorSubject<any[]>([]);
  playlist$ = this.playlistSubject.asObservable();

  setActiveSection(section: string) {
    this.activeSectionSubject.next(section);
  }

  addToPlaylist(item: any) {
    const currentPlaylist = this.playlistSubject.value;
    if (!currentPlaylist.some(song => song.title === item.title)) {
      this.playlistSubject.next([...currentPlaylist, item]);
    }
  }

  removeFromPlaylist(item: any) {
    const currentPlaylist = this.playlistSubject.value;
    this.playlistSubject.next(currentPlaylist.filter(song => song.title !== item.title));
  }

  getPlaylist() {
    return this.playlistSubject.value;
  }
}
