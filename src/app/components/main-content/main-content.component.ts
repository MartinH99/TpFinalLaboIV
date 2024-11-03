import { Component, OnInit } from '@angular/core';
import { SearchStateService } from '../../services/search-state.service';
import { MusicDataService } from '../../services/music-data.service';
import { SectionService } from '../../services/section.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent implements OnInit {
  searchResults: any[] = [];
  worldTop: any[] = [];
  popularArtists: any[] = [];
  playlist: any[] = [];
  searchPerformed = false;
  activeSection: string = 'todos';

  constructor(
    private searchStateService: SearchStateService,
    private musicDataService: MusicDataService,
    private sectionService: SectionService
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

    this.sectionService.activeSection$.subscribe(section => {
      this.activeSection = section;
    });

    this.sectionService.playlist$.subscribe(playlist => {
      this.playlist = playlist;
    });
  }
}
