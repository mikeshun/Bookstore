import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SideNavComponent } from './Components/side-nav/side-nav.component';
import { TopNavComponent } from './Components/top-nav/top-nav.component';
import { HomeComponent } from './Components/home/home.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { DxDataGridModule, DxTemplateModule } from 'devextreme-angular';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { EditBookComponent } from './Components/Dialogs/edit-book/edit-book.component';
import { SuccessAlertComponent } from './Components/Dialogs/success-alert/success-alert.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    SideNavComponent,
    TopNavComponent,
    HomeComponent,
    DashboardComponent,
    EditBookComponent,
    SuccessAlertComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DxDataGridModule,
		DxTemplateModule,
    MatDialogModule,
    FormsModule ,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule
   
  ]
})
export class HomeModule { }
