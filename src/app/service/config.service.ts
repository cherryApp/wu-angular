import { Injectable } from '@angular/core';
import { Column } from '../model/column';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  appName: string = "Fleet Manager";
  http: any = {
    server: 'http://localhost:3000/'
  };

  columns: { [key: string]: Column[] } = {
    drivers: [
      {key: 'id', title: '#', type: 'plain'},
      {key: 'name', title: 'Name', type: 'text'},
      {key: 'email', title: 'Email', type: 'email'}
    ],
    vehicles: [
      {key: 'id', title: '#', type: 'plain'},
      {key: 'lp', title: 'Lp.', type: 'text'},
      {key: 'manufacturer', title: 'Man.', type: 'text'},
      {key: 'engine', title: 'Man.', type: 'text'},
      {key: 'consumption', title: 'Cons.', type: 'number'},
      {key: 'year', title: 'Year', type: 'number'}
    ],
    fuelings: [
      {key: 'id', title: '#', type: 'plain'},
      {key: 'date', title: 'Date', type: 'date'},
      {key: 'driverId', title: 'Driver', type: 'select'},
      {key: 'vehicleId', title: 'Vehicle', type: 'select'},
      {key: 'amount', title: 'Amount', type: 'number'}
    ]
  };

  constructor() { }
}
