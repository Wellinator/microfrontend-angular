import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  public title = 'host';
  public linkColor: Array<HTMLLinkElement> = [];

  constructor(@Inject(DOCUMENT) public document: Document) {}

  ngAfterViewInit(): void {
    this.linkColor = Array.from(this.document.querySelectorAll('.nav_link'));
    this.linkColor.forEach((l) => l.addEventListener('click', this.colorLink));
  }

  public colorLink() {
    if (this.linkColor) {
      this.linkColor.forEach((l) => l.classList.remove('active'));
      // l.classList.add('active');
    }
  }

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

  // Your code to run since DOM is loaded and ready
}
