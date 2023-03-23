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
}
