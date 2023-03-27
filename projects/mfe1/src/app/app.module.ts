import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Mfe1Module } from './mfe1.module';
import { SidebarModule } from 'projects/host/src/app/components/sidebar/sidebar.module';
import { HeaderModule } from 'projects/host/src/app/components/header/header.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    HeaderModule,
    Mfe1Module,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
