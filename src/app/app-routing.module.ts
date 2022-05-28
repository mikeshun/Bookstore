import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'home-module',
    loadChildren: () => import('./Home/home/home.module').then(m => m.HomeModule)
  }, 
  {
    path:'login-page',
    component:LoginComponent
  },

  {
    path: '',
    redirectTo: 'login-page',
    pathMatch : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
