import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
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
    @Inject(DOCUMENT) public document: Document
  ) {}
}
