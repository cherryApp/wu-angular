import { Component, OnInit } from '@angular/core';
import { Driver } from '../../model/driver';
import { Column } from 'src/app/model/column';
import { Router } from '@angular/router';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {
  drivers: Driver[] = [
    {id: 1, name: "Charlie Filpo", email: "cf@cf.org"},
    {id: 2, name: "Joe Filpo", email: "jf@jf.org"},
    {id: 3, name: "Jack Filpo", email: "jack.f@jack.f.org"}
  ];

  columns: Column[] = [
    {key: 'id', title: '#'},
    {key: 'name', title: 'Name'},
    {key: 'email', title: 'Email'}
  ];

  selectedRow: any = null;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  updateItem(row: any): void {
    console.log(row);
    this.selectedRow = row;
  }
  
  deleteItem(row: any): void {
    if (confirm(`Are you sure?`)) {
      let index = -1;
      
      for (let k in this.drivers) {
        if (this.drivers[k].id === row.id) {
          index = parseInt(k);
          break;
        }
      }

      if (index > -1) {
        this.drivers.splice(index, 1);
      }
    }
  }

}
