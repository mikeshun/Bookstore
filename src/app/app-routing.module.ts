import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home-module',
    loadChildren: () => import('./Home/home/home.module').then(m => m.HomeModule)
  }, 

  {
    path: '',
    redirectTo: 'home-module',
    pathMatch : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
