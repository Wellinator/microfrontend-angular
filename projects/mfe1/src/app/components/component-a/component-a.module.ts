import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentA } from './component-a.component';

const routes: Routes = [{ path: '', pathMatch: 'full', component: ComponentA }];

@NgModule({
  declarations: [ComponentA],
  exports: [ComponentA],
  providers: [],
  imports: [RouterModule.forChild(routes)],
})
export class ComponentAModule {}
