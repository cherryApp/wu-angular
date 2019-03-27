import { Component, OnInit, OnDestroy } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts/google-charts-interfaces';
import { BaseService } from 'src/app/service/base.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{
  public vehicleChart: GoogleChartInterface;
  public driverChart: GoogleChartInterface;
  public dayChart: GoogleChartInterface;
  public chartType: string = 'PieChart';
  public pieOptions: any = { 
    is3D: true,
    chartArea: {width: 400, height: 400}
  };
  public columnOptions: any = { 
    is3D: true,
    chartArea: {width: 800, height: 400},
    hAxis: {
      title: 'Days'
    },
    vAxis: {
      title: 'Consumption'
    }
  };
  public dataSubscription: Subscription;

  constructor(private baseService: BaseService) {
    this.baseService.customQuery('fuelings?_expand=vehicle&_expand=driver')
      .then(
        data => this.initChart(data),
        err => console.error(err)
      );
  }

  ngOnInit() {}

  ngOnDestroy() {}

  processByVehicle(data: any[]): any[] {
    // Collect data by vehicle.
    let byVehicle: any = {};
    let table: any[] = [];
    for (let row of data) {
      if (!byVehicle[row.vehicle.lp]) {
        byVehicle[row.vehicle.lp] = 0;
      }
      byVehicle[row.vehicle.lp] += parseInt(row.amount);
    }

    // Fill table.
    for (let k in byVehicle) {
      table.push([k, byVehicle[k]]);
    }

    return table;
  }
  
  processByDriver(data: any[]): any[] {
    // Collect data by driver.
    let byDriver: any = {};
    let table: any[] = [];
    for (let row of data) {
      if (!byDriver[row.driver.name]) {
        byDriver[row.driver.name] = 0;
      }
      byDriver[row.driver.name] += parseInt(row.amount);
    }

    // Fill table.
    for (let k in byDriver) {
      table.push([k, byDriver[k]]);
    }

    return table;
  }
  
  processByDay(data: any[]): any[] {
    // Collect data by driver.
    let byData: any = {};
    let table: any[] = [];
    for (let row of data) {
      if (!byData[row.date]) {
        byData[row.date] = 0;
      }
      byData[row.date] += parseInt(row.amount);
    }

    // Fill table.
    for (let k in byData) {
      table.push([k, byData[k]]);
    }

    return table;
  }

  initChart(data: any[]): void {
    console.log(data);    
    let vehicleTable = [['Vehicle', 'Consumption']].concat( this.processByVehicle(data) );
    let driverTable = [['Driver', 'Consumption']].concat( this.processByDriver(data) );
    let dayTable = [['Day', 'Consumption']].concat( this.processByDay(data) );

    this.vehicleChart = {
      chartType: this.chartType,
      dataTable: vehicleTable,
      options: this.pieOptions
    };
    
    this.driverChart = {
      chartType: this.chartType,
      dataTable: driverTable,
      options: this.pieOptions
    };
    
    this.dayChart = {
      chartType: 'ColumnChart',
      dataTable: dayTable,
      options: this.columnOptions
    };
  }

}
