import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'logout',
  templateUrl: './logout.component.html',
})
export class LogoutComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private doc: Document) {}

  ngOnInit(): void {}

  logout(): void {}
}
