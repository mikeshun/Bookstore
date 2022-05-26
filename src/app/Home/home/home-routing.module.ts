import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { SideNavComponent } from './Components/side-nav/side-nav.component';
import { TopNavComponent } from './Components/top-nav/top-nav.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';

const routes: Routes = [
  {path:'',pathMatch:'full', redirectTo:'Home'},
  {path:'Home', component:HomeComponent,
  children:[
    {path:'', redirectTo:'dashboard', pathMatch:'full'},
    {path:'side-nav', component:SideNavComponent},
    {path:'top-nav', component:TopNavComponent},
    {path:'dashboard', component:DashboardComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
