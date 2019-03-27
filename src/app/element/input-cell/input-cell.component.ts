import { Component, OnInit, Input } from '@angular/core';
import { Column } from 'src/app/model/column';

@Component({
  selector: 'app-input-cell',
  templateUrl: './input-cell.component.html',
  styleUrls: ['./input-cell.component.css']
})
export class InputCellComponent implements OnInit {
  @Input() col: Column;
  @Input() row: any;

  constructor() { }

  ngOnInit() {
  }

}
