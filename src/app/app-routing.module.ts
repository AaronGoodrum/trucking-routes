import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'

import { DashboardComponent } from './dashboard/dashboard.component';
import { DriverComponent } from './driver/driver.component'
import { DriverDashboardComponent } from './driver/dashboard/dashboard.component'
import { DriverEditComponent } from './driver/edit/edit.component'
//ng generate component dashboard

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'driver', component: DriverComponent },
  { path: 'driverDashboard', component: DriverDashboardComponent },
  { path: 'driverEdit', component: DriverEditComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
   ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
