import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MaterialModule } from '../shared/material.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [
    UserDetailComponent,
    UsersComponent,

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    HttpClientModule,
    SharedModule,
  ],

  providers:[
  ]
})
export class DashboardModule { }
