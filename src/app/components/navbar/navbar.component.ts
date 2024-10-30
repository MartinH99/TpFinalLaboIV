import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MoodMusicService } from '../../services/mood-music.service';
import { SearchStateService } from '../../services/search-state.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  public isProfileMenuOpen = false;
  public searchMood: string = '';

  constructor(
    private router: Router,
    private moodMusicService: MoodMusicService,
    private searchStateService: SearchStateService
  ) { }

  logout() {
    this.router.navigate(['/login']);
  }

  profile() {
    this.router.navigate(['/profile']);
  }

  toggleProfileMenu() {
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
  }

  onSearch() {
    if (this.searchMood.trim() !== '') {
      this.loadSongs(this.searchMood);
    }
  }

  loadSongs(currentMood: string) {
    this.moodMusicService.getSongsByMood(currentMood).subscribe(
      (data) => {
        console.log('Canciones encontradas:', data);
        this.searchStateService.updateSearchResults(data.songs); 
      },
      (error) => {
        console.error('Error fetching songs:', error);
        this.searchStateService.resetSearch();
      }
    );
  }
  
}
