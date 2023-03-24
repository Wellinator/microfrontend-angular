import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.style.scss'],
})
export class HeaderComponent {
  user$ = this.auth.user$;

  constructor(
    public auth: AuthService,
    @Inject(DOCUMENT) public document: Document
  ) {}

  public toggleNavBar() {
    const nav = this.document.getElementById('nav-bar');
    nav?.classList.toggle('show');
  }
}
