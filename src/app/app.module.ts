import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/app-layout/header/header.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DashboardLayoutComponent } from './layout/app-layout/dashboard-layout/dashboard-layout.component';
import { SideBarComponent } from './layout/app-layout/side-bar/side-bar.component';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './shared/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardLayoutComponent,
    HeaderComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    SharedModule,
    MaterialModule,
    BrowserAnimationsModule ,
    HttpClientModule,
  ],
  providers: [
    provideClientHydration(),
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
