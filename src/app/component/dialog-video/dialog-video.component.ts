import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-video',
  templateUrl: './dialog-video.component.html',
  styleUrls: ['./dialog-video.component.css'],
})
export class DialogVideoComponent implements OnInit {
  url: string;
  constructor(@Inject(MAT_DIALOG_DATA) public youtubeVideoId: string) {
    this.url = `https://www.youtube.com/embed/${this.youtubeVideoId}?autoplay=1`;
  }
  ngOnInit(): void {}
}
