import { Component, OnInit, OnDestroy } from '@angular/core';
import { Driver } from '../../model/driver';
import { Column } from 'src/app/model/column';
import { BaseService } from 'src/app/service/base.service';
import { Subscription } from 'rxjs';
import { ConfigService } from 'src/app/service/config.service';
import { Base } from '../base';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent extends Base {

  constructor(
    public config: ConfigService,
    public baseService: BaseService) {
      super(config, baseService, 'driver');
    }

}
