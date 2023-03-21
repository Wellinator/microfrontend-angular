import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { environment as env } from '../environments/environment';
import { AuthModule } from '@auth0/auth0-angular';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent, LogoutComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: env.domain,
      clientId: env.clientId,
    }),
  ],
})
export class AppModule {}
