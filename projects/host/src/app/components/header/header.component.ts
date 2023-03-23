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

  public toggleNavBar(event: any) {
    const toggle = this.document.getElementById('header-toggle');
    const nav = this.document.getElementById('nav-bar');
    const bodypd = this.document.getElementById('body-pd');
    const headerpd = this.document.getElementById('header');

    // show navbar
    nav?.classList.toggle('show');
    // change icon
    toggle?.classList.toggle('bx-x');
    // add padding to body
    bodypd?.classList.toggle('body-pd');
    // add padding to header
    headerpd?.classList.toggle('body-pd');
  }
}
