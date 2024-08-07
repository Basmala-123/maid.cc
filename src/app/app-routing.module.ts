import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './layout/app-layout/dashboard-layout/dashboard-layout.component';

const routes: Routes = [
  { path: 'dashboard',component:DashboardLayoutComponent,loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),data: {breadcrumb: { skip: true }} },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
