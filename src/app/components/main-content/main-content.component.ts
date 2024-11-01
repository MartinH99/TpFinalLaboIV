import { Component, OnInit } from '@angular/core';
import { SearchStateService } from '../../services/search-state.service';
import { MusicDataService } from '../../services/music-data.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {
  searchResults: any[] = [];
  worldTop: any[] = [];
  popularArtists: any[] = [];

  searchPerformed = false;

  constructor(
    private searchStateService: SearchStateService,
    private musicDataService: MusicDataService
  ) { }

  ngOnInit() {
    this.searchStateService.searchResults$.subscribe(results => {
      this.searchResults = results;
    });

    this.searchStateService.searchPerformed$.subscribe(performed => {
      this.searchPerformed = performed;
    });

    this.musicDataService.getWorldTop().subscribe(data => {
      this.worldTop = data;
    });

    this.musicDataService.getPopularArtists().subscribe(data => {
      this.popularArtists = data;
    });
  }
}
