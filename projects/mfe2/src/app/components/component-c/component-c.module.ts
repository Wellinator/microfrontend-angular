import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentC } from './component-c.component';

const routes: Routes = [{ path: '', pathMatch: 'full', component: ComponentC }];

@NgModule({
  declarations: [ComponentC],
  exports: [ComponentC],
  providers: [],
  imports: [RouterModule.forChild(routes)],
})
export class ComponentCModule {}
