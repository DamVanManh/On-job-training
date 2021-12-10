import { YoutubeApiService } from './shared/youtube-api.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogSearchSettingComponent } from 'src/app/component/dialog-search-setting/dialog-search-setting.component';
import { forkJoin, Subject, timer } from 'rxjs';
import { debounce, distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { SearchParams } from 'src/app/shared/model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  searchDebounce = 500;
  maxDate: Date = new Date();
  private subjectKeyUp = new Subject<any>();
  constructor(
    private youtubeApiService: YoutubeApiService,
    private dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.subjectKeyUp
      .pipe(
        debounce(() => timer(this.searchDebounce)),
        distinctUntilChanged()
      )
      .subscribe((d) => {
        this.searchVideo();
      });
    this.searchVideo();
  }

  searchResult: any = {};
  videoInfos: any[] = [];
  videos: any[] = [];

  orders = ['date', 'rating', 'relevance', 'title', 'videoCount', 'viewCount'];
  searchParams: SearchParams = {
    maxResults: 10,
    apiKey: 'AIzaSyDrWGEd2boDFCRvxh456B17A9F5u0pTEOc',
    q: 'the weeknd',
    order: this.orders[2],
    publishedAfter: '',
    publishedBefore: '',
    pageToken: '',
  };
  searchVideo() {
    this.youtubeApiService
      .search(this.searchParams)
      .pipe(
        switchMap((searchResult) => {
          console.log('search video Result ', searchResult.items);
          this.searchResult = searchResult;
          return forkJoin(
            searchResult.items.map((videoInfo: any) =>
              this.youtubeApiService.getVideoDetail(videoInfo.id.videoId)
            )
          );
        }),
        map((item: any): any => {
          console.log('video detail result ', item);
          return item.map((item: any, i: number) => ({
            ...item.items[0],
            ...this.searchResult.items[i],
          }));
        })
      )
      .subscribe(
        (videoInfos) => {
          this.videoInfos = videoInfos;
          console.log('merge videoInfo ', videoInfos);
          this.createPaginator();
        },
        (error) => {
          console.log('error ', error);
        }
      );
  }

  changeSearchSetting() {
    const dialogRef = this.dialog.open(DialogSearchSettingComponent, {
      data: {
        numberPerPage: this.numberPerPage,
        searchDebounce: this.searchDebounce,
        apiKey: this.searchParams.apiKey,
      },
      autoFocus: false,
      width: '400px',
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.searchDebounce = result.searchDebounce;
      this.searchParams.apiKey = result.apiKey;

      if (this.numberPerPage !== +result.numberPerPage) {
        this.numberPerPage = +result.numberPerPage;
        this.createPaginator();
      }
    });
  }
  onChangeSearchQ() {
    this.subjectKeyUp.next(this.searchParams.q);
  }

  fromDateValue: any;
  toDateValue: any;
  changeDateFrom(event: any) {
    this.searchParams.publishedAfter = event.value.toISOString();
    this.searchVideo();
  }
  changeDateTo(event: any) {
    this.searchParams.publishedBefore = event.value.toISOString();
    this.searchVideo();
  }

  selectOrder(order: string) {
    this.searchParams.order = order;
    this.searchVideo();
  }

  numberPerPage: number = 5;
  pageTotal: number = 0;
  pages: number[] = [];
  currentPage = 0;
  createPaginator() {
    this.currentPage = 0;
    this.videos = this.videoInfos.slice(0, this.numberPerPage);
    this.pageTotal = Math.ceil(this.videoInfos.length / this.numberPerPage);
    this.pages = Array.from({ length: this.pageTotal }, (v, i) => i);
  }
  goToPage(page: number) {
    this.currentPage = page;
    this.videos = this.videoInfos.slice(
      page * this.numberPerPage,
      page * this.numberPerPage + this.numberPerPage
    );
  }
  goFirstPage() {
    this.currentPage = 0;
    this.videos = this.videoInfos.slice(0, this.numberPerPage);
  }
  goLastPage() {
    this.currentPage = this.pageTotal - 1;
    this.videos = this.videoInfos.slice(
      (this.pageTotal - 1) * this.numberPerPage
    );
  }
}
