import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'sidebar-component',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.style.scss'],
})
export class SidebarComponent {
  user$ = this.auth.user$;

  constructor(
    public auth: AuthService,
    public route: Router,
    @Inject(DOCUMENT) public document: Document
  ) {}

  public isActive(uri: string): boolean {
    return this.route.url == uri;
  }
}
