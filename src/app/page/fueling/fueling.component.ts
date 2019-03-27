import { Component, OnInit, OnDestroy } from '@angular/core';
import { Base } from '../base';
import { ConfigService } from 'src/app/service/config.service';
import { BaseService } from 'src/app/service/base.service';
import { zip, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-fueling',
  templateUrl: './fueling.component.html',
  styleUrls: ['./fueling.component.css']
})
export class FuelingComponent extends Base implements OnInit, OnDestroy {
  driverList: any[] = [];
  vehicleList: any[] = [];
  listSubscription: Subscription;

  constructor(
    public config: ConfigService,
    public baseService: BaseService) {
    super(config, baseService, 'fuelings');
  }

  ngOnInit() {
    let allObservables = zip(
      this.baseService.getAll('vehicles').pipe(
        map( (vehicles) => {
          let list: any[] = [];
          for(let row of vehicles) {
            list.push( {value: row.id, text: row.lp} );
          }
          return list;
        })
      ),
      this.baseService.getAll('drivers').pipe(
        map( (drivers) => {
          let list: any[] = [];
          for(let row of drivers) {
            list.push( {value: row.id, text: row.name} );
          }
          return list;
        })
      )
    );

    this.subscription = allObservables.subscribe(
      valueList => {
        console.log('valueList', valueList);
        this.vehicleList = valueList[0];
        this.driverList = valueList[1];
        this.setColumns();
      },
      err => console.error(err),
      () => console.info(`unsubscribed from ${this.entityName}`)
    );

    this.listSubscription = this.baseService.getAll(
      this.entityName,
      '?_sort=date&_order=asc'
      )
      .subscribe(
        list => this.list = list
      );

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.listSubscription.unsubscribe();
  }
  
  setColumns() {
    let cols = this.config.columns['fuelings'];

    for (var k in cols) {
      if (cols[k].key == 'driverId') {
        cols[k].options = this.driverList;
      }
      if (cols[k].key == 'vehicleId') {
        cols[k].options = this.vehicleList;
      }
    }

    this.columns = cols;
  }

}
