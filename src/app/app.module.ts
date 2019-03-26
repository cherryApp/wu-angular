import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRouting } from './service/config.service';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './page/home/home.component';
import { FuelingComponent } from './page/fueling/fueling.component';
import { VehicleComponent } from './page/vehicle/vehicle.component';
import { DriverComponent } from './page/driver/driver.component';
import { DataTableComponent } from './element/data-table/data-table.component';
import { RowEditorComponent } from './row-editor/row-editor.component';

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
    RouterModule.forRoot(AppRouting)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
