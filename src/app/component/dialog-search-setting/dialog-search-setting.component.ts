import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-search-setting',
  templateUrl: './dialog-search-setting.component.html',
  styleUrls: ['./dialog-search-setting.component.css'],
})
export class DialogSearchSettingComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  ngOnInit(): void {}
}
