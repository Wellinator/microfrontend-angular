import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar.component';

// const routes: Routes = [
//   { path: '', pathMatch: 'full', component: SidebarComponent },
// ];

@NgModule({
  declarations: [SidebarComponent],
  exports: [SidebarComponent],
  providers: [],
  imports: [
    CommonModule,
    RouterModule
    // RouterModule.forChild(routes)
  ],
})
export class SidebarModule {}
