import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',  
  styleUrls: ['./card.component.css'] 
})
export class CardComponent {
  @Input() image!: string;
  @Input() title!: string;
  @Input() artist?: string;
  @Input() url?: string;
  @Input() isPlayable: boolean = false; 
}