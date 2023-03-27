import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sidebar-component',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.style.scss'],
})
export class SidebarComponent {
  constructor(
    public route: Router,
    @Inject(DOCUMENT) public document: Document
  ) {}

  public isActive(uri: string): boolean {
    return this.route.url == uri;
  }
}
