import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ComponentCModule } from 'projects/mfe2/src/app/components/component-c/component-c.module';
import { SidebarModule } from './components/sidebar/sidebar.module';
import { HeaderModule } from './components/header/header.module';

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent, LogoutComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    HeaderModule,
    ComponentCModule,
  ],
})
export class AppModule {}
