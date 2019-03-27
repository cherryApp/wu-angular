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
    let query = 'fuelings?_expand=vehicle&_expand=driver&_sort=date&_order=asc';
    this.baseService.customQuery(query)
      .then(
        data => this.initChart(data),
        err => console.error(err)
      );
  }

  ngOnInit() {}

  ngOnDestroy() {}

  processByType(data: any[], getKey: Function, getValue: Function): any[] {
    let processed: any = {};
    let table: any[] = [];
    for (let row of data) {
      if (!processed[getKey(row)]) {
        processed[getKey(row)] = 0;
      }
      processed[getKey(row)] += parseInt(getValue(row));
    }

    // Fill table.
    for (let k in processed) {
      table.push([k, processed[k]]);
    }

    return table;
  }

  initChart(data: any[]): void {
    this.vehicleChart = {
      chartType: this.chartType,
      dataTable: [['Vehicle', 'Consumption']].concat( 
        this.processByType(data, row => row.vehicle.lp, row => row.amount) 
      ),
      options: this.pieOptions
    };
    
    this.driverChart = {
      chartType: this.chartType,
      dataTable: [['Driver', 'Consumption']].concat(
        this.processByType(data, row => row.driver.name, row => row.amount) 
      ),
      options: this.pieOptions
    };
    
    this.dayChart = {
      chartType: 'ColumnChart',
      dataTable: [['Day', 'Consumption']].concat(
        this.processByType(data, row => row.date, row => row.amount) 
      ),
      options: this.columnOptions
    };
  }
}
