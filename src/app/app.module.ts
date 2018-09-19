import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {customMaterialModule} from './app.materiaModule'

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DriverComponent } from './driver/driver.component';
import { DriverDashboardComponent } from './driver/dashboard/dashboard.component';
import { DriverEditComponent } from './driver/edit/edit.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DriverEditComponent,
    DriverDashboardComponent,
    DriverComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    customMaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
