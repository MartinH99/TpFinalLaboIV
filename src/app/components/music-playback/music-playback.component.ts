import { Component, OnInit, OnDestroy } from '@angular/core';
import { SectionService } from '../../services/section.service';
import { MusicDataService } from '../../services/music-data.service';

@Component({
  selector: 'app-music-playback',
  templateUrl: './music-playback.component.html',
  styleUrls: ['./music-playback.component.css']
})
export class MusicPlaybackComponent implements OnInit, OnDestroy {
  currentSong: any = null;
  defaultSong: any = null;
  audio: HTMLAudioElement | null = null;
  isPlaying: boolean = false;

  constructor(
    private currentSongService: SectionService,
    private musicDataService: MusicDataService
  ) { }

  ngOnInit() {
    this.musicDataService.getWorldTop().subscribe(songs => {
      if (songs && songs.length > 0) {
        this.defaultSong = songs[0];
        this.currentSong = this.defaultSong;
        this.initializeAudio();
      }
    });

    this.currentSongService.currentSong$.subscribe(song => {
      if (song) {
        this.currentSong = song;
        // console.log('New current song:', this.currentSong);
        this.initializeAudio();
      }
    });
  }

  ngOnDestroy() {
    this.stopAudio();
  }

  initializeAudio() {
    this.stopAudio();
    if (this.currentSong && this.currentSong.preview_url) {
      this.audio = new Audio(this.currentSong.preview_url);
    } else {
      this.audio = null;
    }
  }

  togglePlay() {
    if (this.audio) {
      if (this.isPlaying) {
        this.audio.pause();
      } else {
        this.audio.play().catch(error => {
          console.error('Error playing audio:', error);
        });
      }
      this.isPlaying = !this.isPlaying;
    }
  }

  stopAudio() {
    if (this.audio) {
      this.audio.pause();
      this.audio = null;
    }
    this.isPlaying = false;
  }
}
