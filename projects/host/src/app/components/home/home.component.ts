import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  user$ = this.auth.user$;

  constructor(public auth: AuthService) {}
}
