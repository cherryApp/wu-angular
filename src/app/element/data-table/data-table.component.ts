import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  @Input() rows = [];
  @Input() cols = [];

  @Output() onDelete: EventEmitter<any> = new EventEmitter();
  @Output() onUpdate: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  deleteRow(row: any) {
    this.onDelete.emit(row);
  }
  
  updateRow(row: any) {
    this.onUpdate.emit(row);
  }

}
