import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  user$ = this.auth.user$;

  constructor(private auth: AuthService) {}

  login(): void {
    this.auth.loginWithRedirect();
  }
}
