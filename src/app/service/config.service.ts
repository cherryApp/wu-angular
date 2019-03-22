import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from '../page/home/home.component';
import { FuelingComponent } from '../page/fueling/fueling.component';
import { VehicleComponent } from '../page/vehicle/vehicle.component';
import { DriverComponent } from '../page/driver/driver.component';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  appName: string = "Fleet Manager";

  constructor() { }
}

export const AppRouting: Routes = [
  { path: '', component: HomeComponent },
  { path: 'fueling', component: FuelingComponent },
  { path: 'vehicle', component: VehicleComponent },
  { path: 'driver', component: DriverComponent },
  { path: 'driver/update/:id', component: DriverComponent },
  { path: '**', redirectTo: '' }
];
