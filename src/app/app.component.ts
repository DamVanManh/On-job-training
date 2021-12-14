import { YoutubeApiService } from './shared/youtube-api.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogSearchSettingComponent } from 'src/app/component/dialog-search-setting/dialog-search-setting.component';
import { forkJoin, Subject, timer } from 'rxjs';
import { debounce, distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { SearchParams } from 'src/app/shared/model';
import * as XLSX from 'xlsx';
type AOA = any[][];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // searchDebounce = 500;
  // maxDate: Date = new Date();
  // private subjectKeyUp = new Subject<any>();
  // constructor(
  //   private youtubeApiService: YoutubeApiService,
  //   private dialog: MatDialog
  // ) {}
  // ngOnInit(): void {
  //   this.subjectKeyUp
  //     .pipe(
  //       debounce(() => timer(this.searchDebounce)),
  //       distinctUntilChanged()
  //     )
  //     .subscribe((d) => {
  //       this.searchVideo();
  //     });
  //   this.searchVideo();
  // }

  // searchResult: any = {};
  // videoInfos: any[] = [];
  // videos: any[] = [];

  // orders = ['date', 'rating', 'relevance', 'title', 'videoCount', 'viewCount'];
  // searchParams: SearchParams = {
  //   maxResults: 10,
  //   apiKey: 'AIzaSyDrWGEd2boDFCRvxh456B17A9F5u0pTEOc',
  //   q: 'the weeknd',
  //   order: this.orders[2],
  //   publishedAfter: '',
  //   publishedBefore: '',
  //   pageToken: '',
  // };
  // searchVideo() {
  //   this.youtubeApiService
  //     .search(this.searchParams)
  //     .pipe(
  //       switchMap((searchResult) => {
  //         console.log('search video Result ', searchResult.items);
  //         this.searchResult = searchResult;
  //         return forkJoin(
  //           searchResult.items.map((videoInfo: any) =>
  //             this.youtubeApiService.getVideoDetail(videoInfo.id.videoId)
  //           )
  //         );
  //       }),
  //       map((item: any): any => {
  //         console.log('video detail result ', item);
  //         return item.map((item: any, i: number) => ({
  //           ...item.items[0],
  //           ...this.searchResult.items[i],
  //         }));
  //       })
  //     )
  //     .subscribe(
  //       (videoInfos) => {
  //         this.videoInfos = videoInfos;
  //         console.log('merge videoInfo ', videoInfos);
  //         this.createPaginator();
  //       },
  //       (error) => {
  //         console.log('error ', error);
  //       }
  //     );
  // }

  // changeSearchSetting() {
  //   const dialogRef = this.dialog.open(DialogSearchSettingComponent, {
  //     data: {
  //       numberPerPage: this.numberPerPage,
  //       searchDebounce: this.searchDebounce,
  //       apiKey: this.searchParams.apiKey,
  //     },
  //     autoFocus: false,
  //     width: '400px',
  //     disableClose: true,
  //   });
  //   dialogRef.afterClosed().subscribe((result) => {
  //     this.searchDebounce = result.searchDebounce;
  //     this.searchParams.apiKey = result.apiKey;

  //     if (this.numberPerPage !== +result.numberPerPage) {
  //       this.numberPerPage = +result.numberPerPage;
  //       this.createPaginator();
  //     }
  //   });
  // }
  // onChangeSearchQ() {
  //   this.subjectKeyUp.next(this.searchParams.q);
  // }

  // fromDateValue: any;
  // toDateValue: any;
  // changeDateFrom(event: any) {
  //   this.searchParams.publishedAfter = event.value.toISOString();
  //   this.searchVideo();
  // }
  // changeDateTo(event: any) {
  //   this.searchParams.publishedBefore = event.value.toISOString();
  //   this.searchVideo();
  // }

  // selectOrder(order: string) {
  //   this.searchParams.order = order;
  //   this.searchVideo();
  // }

  // numberPerPage: number = 5;
  // pageTotal: number = 0;
  // pages: number[] = [];
  // currentPage = 0;
  // createPaginator() {
  //   this.currentPage = 0;
  //   this.videos = this.videoInfos.slice(0, this.numberPerPage);
  //   this.pageTotal = Math.ceil(this.videoInfos.length / this.numberPerPage);
  //   this.pages = Array.from({ length: this.pageTotal }, (v, i) => i);
  // }
  // goToPage(page: number) {
  //   this.currentPage = page;
  //   this.videos = this.videoInfos.slice(
  //     page * this.numberPerPage,
  //     page * this.numberPerPage + this.numberPerPage
  //   );
  // }
  // goFirstPage() {
  //   this.currentPage = 0;
  //   this.videos = this.videoInfos.slice(0, this.numberPerPage);
  // }
  // goLastPage() {
  //   this.currentPage = this.pageTotal - 1;
  //   this.videos = this.videoInfos.slice(
  //     (this.pageTotal - 1) * this.numberPerPage
  //   );
  // }
  ngAfterViewInit() {
    console.log('ngAfterViewInit ', this.TABLE);
  }
  ngOnInit() {
    console.log('ngOnInit ', this.TABLE);
  }

  @ViewChild('TABLE', { static: false }) TABLE!: ElementRef;
  title = 'Excel';
  ExportTOExcel() {
    console.log('nativeElement: ', this.TABLE);

    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(
      this.TABLE.nativeElement
    );
    console.log('WorkSheet ', ws);

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    console.log('WorkBook ', wb);

    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'ScoreSheet.xlsx');
  }

  team: any = [
    {
      Sno: 1,
      Team: 'India',
      Match: 8,
      Win: 7,
      Loss: 0,
      Cancel: 1,
      Point: 15,
    },
    {
      Sno: 2,
      Team: 'NewZeland',
      Match: 8,
      Win: 6,
      Loss: 1,
      Cancel: 1,
      Point: 13,
    },
    {
      Sno: '3',
      Team: 'Aus',
      Match: 8,
      Win: 6,
      Loss: 1,
      Cancel: 1,
      Point: 13,
    },
    {
      Sno: '4',
      Team: 'England',
      Match: 8,
      Win: 5,
      Loss: 2,
      Cancel: 1,
      Point: 11,
    },
    {
      Sno: '5',
      Team: 'S.Africa',
      Match: 8,
      Win: 4,
      Loss: 3,
      Cancel: 1,
      Point: 9,
    },
    {
      Sno: '6',
      Team: 'Pak',
      Match: 8,
      Win: 4,
      Loss: 4,
      Cancel: 1,
      Point: 9,
    },
    {
      Sno: '7',
      Team: 'SriLanka',
      Match: 8,
      Win: 3,
      Loss: 3,
      Cancel: 2,
      Point: 8,
    },
    {
      Sno: '8',
      Team: 'Bdesh',
      Match: 8,
      Win: 2,
      Loss: 4,
      Cancel: 2,
      Point: 6,
    },
  ];

  data: AOA = [
    [1, 2],
    [3, 4],
  ];
  wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
  fileName: string = 'SheetJS.xlsx';
  ver: string = XLSX.version;

  onFileChange(evt: any) {
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>evt.target;
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const ab: ArrayBuffer = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(ab);

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      this.data = <AOA>XLSX.utils.sheet_to_json(ws, { header: 1 });
    };
    reader.readAsArrayBuffer(target.files[0]);
  }

  export(): void {
    /* generate worksheet */
    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(this.data);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);
  }
}
