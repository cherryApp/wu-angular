import { Injectable } from '@angular/core';
import { Driver } from '../model/driver';
import { Column } from '../model/column';
import { Observable, Subscriber, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  entities: any = {};

  constructor(
    private http: HttpClient,
    private config: ConfigService) { }

  customQuery(query: string): Promise<any> {
    return this.http.get(`${this.config.http.server}${query}`).toPromise();
  }

  getAll(entityName: string): Observable<any> {
    if (!this.entities[entityName]) {
      this.entities[entityName] = new Subject();
    }

    this.http.get(`${this.config.http.server}${entityName}`)
      .forEach( data => this.entities[entityName].next(data) );

    return this.entities[entityName];
  }

  delete(entityName: string, id: string|number) : void {
    this.http.delete(`${this.config.http.server}${entityName}/${id}`)
      .toPromise()
      .then( 
        () => this.getAll(entityName),
        err => console.error(err)
      );
  }

  update(entityName: string, row: any): void {
    this.http.put(
      `${this.config.http.server}${entityName}/${row.id}`,
      row
    ).toPromise()
      .then( 
        () => this.getAll(entityName),
        err => console.error(err)
      );
  }
  
  create(entityName: string, row: any): void {
    this.http.post(
      `${this.config.http.server}${entityName}`,
      row
    ).toPromise()
      .then( 
        () => this.getAll(entityName),
        err => console.error(err)
      );
  }
}
