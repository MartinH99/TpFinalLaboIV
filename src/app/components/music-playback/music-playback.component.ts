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
  currentTime: number = 0;
  duration: number = 0;
  volume: number = 1;
  isMuted: boolean = false;

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
      this.audio.addEventListener('timeupdate', () => this.updateProgress());
      this.audio.addEventListener('loadedmetadata', () => {
        this.duration = this.audio!.duration;
        this.currentTime = 0;
      });
      this.audio.addEventListener('ended', () => this.onAudioEnded());
      this.audio.volume = this.isMuted ? 0 : this.volume;
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

  updateProgress() {
    if (this.audio) {
      this.currentTime = this.audio.currentTime;
    }
  }

  seek(event: any) {
    if (this.audio) {
      const percent = event.target.value;
      this.audio.currentTime = (percent * this.duration) / 100;
    }
  }

  setVolume(event: any) {
    this.volume = event.target.value;
    if (this.audio) {
      this.audio.volume = this.isMuted ? 0 : this.volume;
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.audio) {
      this.audio.volume = this.isMuted ? 0 : this.volume;
    }
  }

  onAudioEnded() {
    this.isPlaying = false;
    this.currentTime = 0;
    if (this.audio) {
      this.audio.currentTime = 0;
    }
  }

  formatTime(time: number): string {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
}
