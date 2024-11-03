// sidebar.component.ts
import { Component } from '@angular/core';
import { SectionService } from '../../services/section.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  activeSection: string = 'todos';

  constructor(private sectionService: SectionService) { }

  setActiveSection(section: string) {
    this.activeSection = section;
    this.sectionService.setActiveSection(section);
  }
}
