import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  university: string = 'UTN - Universidad Tecnológica Nacional';
  copyright: string = '© 2024 Spotify Mood AB';
}
