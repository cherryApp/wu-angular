import { OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Column } from 'src/app/model/column';
import { ConfigService } from 'src/app/service/config.service';
import { BaseService } from 'src/app/service/base.service';

export class Base implements OnInit, OnDestroy {
  entityName: string = '';
  subscription: Subscription;
  list: any[];
  columns: Column[] = [];

  constructor(
    protected config: ConfigService,
    protected baseService: BaseService,
    entityName: string) {
        this.entityName = entityName;
    }

  ngOnInit() {
    this.subscription = this.baseService.getAll(this.entityName)
      .subscribe(
        list => {
          console.log(list);
          this.list = list;
        },
        err => console.error(err),
        () => console.info(`unsubscribed from ${this.entityName}`)
      );
     
      this.columns = this.config.columns[this.entityName];
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  updateItem(row: any): void {
    this.baseService.update(this.entityName, row);
  }
  
  deleteItem(row: any): void {
    this.baseService.delete(this.entityName, row.id);
  }

}
