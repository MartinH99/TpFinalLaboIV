import { Component } from '@angular/core';

@Component({
  selector: 'app-music-playback',
  templateUrl: './music-playback.component.html',
  styleUrl: './music-playback.component.css'
})
export class MusicPlaybackComponent {
  currentSong = {
    title: 'Venom',
    artist: 'Eminen',
    imageUrl: 'https://i.scdn.co/image/ab67616d0000b2736b5b52e19d31a65bf9923c60'
  };
}
