import { Component, Input, OnInit } from '@angular/core';
import { MusicDataService } from '../../services/music-data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() image!: string;
  @Input() title!: string;
  @Input() artist?: string;
  @Input() url?: string;
  @Input() artistUrl?: string;
  @Input() isPlayable: boolean = false;
  @Input() addPlayList: boolean = false;
  @Input() isArtistCard: boolean = false;
  @Input() id?: number;

  isAddedToPlaylist = false;

  constructor(private musicDataService: MusicDataService) { }

  ngOnInit() {
    this.checkIfInPlaylist();
  }

  togglePlaylist() {
    if (this.isAddedToPlaylist) {
      this.musicDataService.removeFromPlaylist(this.id!).subscribe(() => {
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

      this.musicDataService.addToPlaylist(song).subscribe(() => {
        this.isAddedToPlaylist = true;
      });
    }
  }

  private checkIfInPlaylist() {
    this.musicDataService.getPlaylist().subscribe(playlist => {
      this.isAddedToPlaylist = playlist.some(item => item.id === this.id);
    });
  }
}
