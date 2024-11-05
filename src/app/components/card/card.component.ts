import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { MusicDataService } from '../../services/music-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnDestroy {
  @Input() image!: string;
  @Input() title!: string;
  @Input() artist?: string;
  @Input() url?: string;
  @Input() artistUrl?: string;
  @Input() isPlayable: boolean = false;
  @Input() addPlayList: boolean = false;
  @Input() isArtistCard: boolean = false;
  @Input() id!: number;

  isAddedToPlaylist = false;
  userId: string | null = null;
  private playlistSubscription: Subscription | null = null;

  constructor(private musicDataService: MusicDataService) { }

  ngOnInit() {
    this.userId = localStorage.getItem('userId');
    if (this.userId) {
      this.subscribeToPlaylist();
    }
  }

  ngOnDestroy() {
    if (this.playlistSubscription) {
      this.playlistSubscription.unsubscribe();
    }
  }

  private subscribeToPlaylist() {
    this.playlistSubscription = this.musicDataService.getPlaylist(this.userId!).subscribe(playlist => {
      this.isAddedToPlaylist = playlist.some(item => item.id === this.id);
    });
  }

  togglePlaylist() {
    if (!this.userId) {
      return;
    }

    if (this.isAddedToPlaylist) {
      this.musicDataService.removeFromPlaylist(this.userId, this.id!).subscribe(() => {
        this.isAddedToPlaylist = false;
      });
    } else {
      const song = {
        id: this.id,
        image: this.image,
        title: this.title,
        artist: this.artist,
        url: this.url
      };

      this.musicDataService.addToPlaylist(this.userId, song).subscribe(() => {
        this.isAddedToPlaylist = true;
      });
    }
  }
}