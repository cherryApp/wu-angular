import { Component } from '@angular/core';
import { Base } from '../base';
import { ConfigService } from 'src/app/service/config.service';
import { BaseService } from 'src/app/service/base.service';

@Component({
  selector: 'app-fueling',
  templateUrl: './fueling.component.html',
  styleUrls: ['./fueling.component.css']
})
export class FuelingComponent extends Base {

  constructor(
    public config: ConfigService,
    public baseService: BaseService) {
      super(config, baseService, 'fueling');
    }

}
