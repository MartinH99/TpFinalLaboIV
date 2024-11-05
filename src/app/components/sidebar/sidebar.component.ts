// sidebar.component.ts
import { Component, OnInit } from '@angular/core';
import { SectionService } from '../../services/section.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  activeSection: string = 'todos';

  constructor(private sectionService: SectionService) { }

  ngOnInit() {
    this.sectionService.setActiveSection(this.activeSection);
  }

  setActiveSection(section: string) {
    this.activeSection = section;
    this.sectionService.setActiveSection(section);
  }
}
