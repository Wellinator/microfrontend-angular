import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.style.scss'],
})
export class HeaderComponent {
  constructor(@Inject(DOCUMENT) public document: Document) {}

  public toggleNavBar() {
    const nav = this.document.getElementById('nav-bar');
    nav?.classList.toggle('show');
  }
}
