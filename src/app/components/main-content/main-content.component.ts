import { Component, OnInit } from '@angular/core';
import { SearchStateService } from '../../services/search-state.service';
import { MusicDataService } from '../../services/music-data.service';
import { SectionService } from '../../services/section.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  searchResults: any[] = [];
  worldTop: any[] = [];
  popularArtists: any[] = [];
  playlist: any[] = [];
  searchPerformed = false;
  activeSection: string = 'todos';
  userId: string | null = null;

  constructor(
    private searchStateService: SearchStateService,
    private musicDataService: MusicDataService,
    private sectionService: SectionService
  ) { }

  ngOnInit() {
    this.userId = localStorage.getItem('userId');

    this.loadInitialData();

    this.sectionService.activeSection$.subscribe(section => {
      this.activeSection = section;
      this.loadSectionData(section);
    });

    this.searchStateService.searchResults$.subscribe(results => {
      this.searchResults = results;
    });

    this.searchStateService.searchPerformed$.subscribe(performed => {
      this.searchPerformed = performed;
    });
  }

  loadInitialData() {
    this.musicDataService.getWorldTop().subscribe(data => {
      this.worldTop = data;
    });

    this.musicDataService.getPopularArtists().subscribe(data => {
      this.popularArtists = data;
    });

    if (this.userId) {
      this.loadPlaylist();
    }
  }

  loadSectionData(section: string) {
    switch (section) {
      case 'playlist':
        this.loadPlaylist();
        break;
      case 'todos':
      case 'canciones':
        this.loadWorldTop();
        break;
      case 'artistas':
        this.loadPopularArtists();
        break;
    }
  }

  loadWorldTop() {
    this.musicDataService.getWorldTop().subscribe(data => {
      this.worldTop = data;
    });
  }

  loadPopularArtists() {
    this.musicDataService.getPopularArtists().subscribe(data => {
      this.popularArtists = data;
    });
  }

  loadPlaylist() {
    if (this.userId) {
      this.musicDataService.getPlaylist(this.userId).subscribe(playlist => {
        this.playlist = playlist;
      });
    }
  }
}
