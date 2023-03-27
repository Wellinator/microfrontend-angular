import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },

  /**
   * Manual module loading
   * the './ComponentAModule' entry needs to be loaded in mfe1\webpack.config.js -> exposes;
   * */
  {
    path: 'mfe1',
    loadChildren: () => import('mfe1/Mfe1Module').then((m) => m.Mfe1Module),
    canActivate: [AuthGuard],
  },
  {
    path: 'mfe2',
    loadChildren: () =>
      import('mfe2/ComponentCModule').then((m) => m.ComponentCModule),
    canActivate: [AuthGuard],
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
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
