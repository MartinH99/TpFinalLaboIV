import { Component, Input, OnInit } from '@angular/core';
import { SectionService } from '../../services/section.service';

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

  isAddedToPlaylist = false;

  constructor(private sectionService: SectionService) { }

  ngOnInit() {
    this.checkIfInPlaylist();
  }

  togglePlaylist() {
    if (this.isAddedToPlaylist) {
      this.sectionService.removeFromPlaylist(this);
    } else {
      this.sectionService.addToPlaylist(this);
    }

    this.isAddedToPlaylist = !this.isAddedToPlaylist;
  }

  private checkIfInPlaylist() {
    const playlist = this.sectionService.getPlaylist();
    this.isAddedToPlaylist = playlist.some(item => item.title === this.title);
  }
}
