import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: 'home', component: HomeComponent },

  /**
   * Manual module loading
   * the './ComponentAModule' entry needs to be loaded in mfe1\webpack.config.js -> exposes;
   * */
  {
    path: 'mfe1',
    loadChildren: () =>
      import('mfe1/ComponentAModule').then((m) => m.ComponentAModule),
  },

  /**
   * Dynamic module loading
   * auto generate the exposes keys for external module loading
   * */
  // {
  //   path: 'mfe1',
  //   loadChildren: () =>
  //     loadRemoteModule({
  //       type: 'module',
  //       remoteEntry: 'http://localhost:4201/remoteEntry.js',
  //       exposedModule: './ComponentAModule',
  //     }).then((m) => m.ComponentAModule),
  // },

  {
    path: '**',
    redirectTo: 'login',
  },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
