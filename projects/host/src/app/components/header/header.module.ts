import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';

// const routes: Routes = [
//   { path: '', pathMatch: 'full', component: HeaderComponent },
// ];

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  providers: [],
  imports: [
    CommonModule,
    // RouterModule.forChild(routes)
  ],
})
export class HeaderModule {}
