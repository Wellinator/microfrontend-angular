import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'my-component',
    loadChildren: () =>
      import('./components/component-a/component-a.module').then(
        (m) => m.ComponentAModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
