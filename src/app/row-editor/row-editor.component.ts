import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-row-editor',
  templateUrl: './row-editor.component.html',
  styleUrls: ['./row-editor.component.css']
})
export class RowEditorComponent implements OnInit {
  @Input() cols: any[];
  @Input() row: any;

  constructor() { }

  ngOnInit() {
  }

}
