import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchStateService } from '../../services/search-state.service';
import { MusicDataService } from '../../services/music-data.service';

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
    private moodMusicService: MusicDataService,
    private searchStateService: SearchStateService
  ) { }

  logout() {
    this.router.navigate(['/login']);
  }

  profile() {
    this.router.navigate(['/profile']);
  }

  home() {
    this.router.navigate(['/home']);
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
        this.searchStateService.updateSearchResults(data);
      },
      (error) => {
        console.error('Error fetching songs:', error);
        this.searchStateService.resetSearch();
      }
    );
  }

}
