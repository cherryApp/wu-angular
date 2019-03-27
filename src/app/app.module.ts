import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './page/home/home.component';
import { FuelingComponent } from './page/fueling/fueling.component';
import { VehicleComponent } from './page/vehicle/vehicle.component';
import { DriverComponent } from './page/driver/driver.component';
import { DataTableComponent } from './element/data-table/data-table.component';
import { RowEditorComponent } from './row-editor/row-editor.component';

const appRouting: Routes =   [
  { path: '', component: HomeComponent, data: {animation: 'HomePage'} },
  { path: 'fueling', component: FuelingComponent, data: {animation: 'FilterPage'} },
  { path: 'vehicle', component: VehicleComponent, data: {animation: 'AboutPage'} },
  { path: 'driver', component: DriverComponent, data: {animation: 'FilterPage'} },
  { path: '**', redirectTo: '', data: {animation: 'HomePage'} }
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FuelingComponent,
    VehicleComponent,
    DriverComponent,
    DataTableComponent,
    RowEditorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    Ng2GoogleChartsModule,
    RouterModule.forRoot(appRouting)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
