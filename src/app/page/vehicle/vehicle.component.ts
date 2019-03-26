import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Column } from 'src/app/model/column';
import { ConfigService } from 'src/app/service/config.service';
import { BaseService } from 'src/app/service/base.service';
import { Base } from '../base';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent extends Base {

  constructor(
    public config: ConfigService,
    public baseService: BaseService) {
      super(config, baseService, 'vehicle');
    }

}
