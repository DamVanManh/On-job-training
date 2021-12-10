import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogVideoComponent } from 'src/app/component/dialog-video/dialog-video.component';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
})
export class VideoComponent implements OnInit {
  @Input() video: any = {};
  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {}
  openDialog(youtubeVideoId: string) {
    this.dialog.open(DialogVideoComponent, {
      data: youtubeVideoId,
      panelClass: 'dialog_video',
      maxWidth: 'auto',
      autoFocus: false,
    });
  }
}
