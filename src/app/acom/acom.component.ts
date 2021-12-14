import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef,
  NgZone,
} from '@angular/core';

@Component({
  selector: 'app-acom',
  templateUrl: './acom.component.html',
  styleUrls: ['./acom.component.css'],
})
export class AcomComponent implements OnInit, AfterViewInit {
  value: any = [10];
  number = 0;
  constructor(private cdr: ChangeDetectorRef, private ngZone: NgZone) {}

  // youtube: https://youtu.be/o0gnQhsTYfI
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    // this.value = 20; // báo lỗi

    // // cách fix 1: mặc định có NgZone nên nó sẽ bắt được sự kiện thay đổi value nếu là bất đồng bộ
    // setTimeout(() => {
    //   this.value = 20; // fix lỗi
    // }, 0);
    // // hoặc
    // Promise.resolve().then(()=>{
    //   this.value = 20;
    // })

    // cách fix 2
    // this.value.push(20);
    this.value.push(20);
    this.cdr.detectChanges();
    console.log(this.cdr);

    // ** khi mình muốn viet code nằm ngoài angular nhưng phải cập nhật thay đổi lên view
    // code này nằm ngoài angular do đó sau khi cập nhật angular state,
    // angular không nhận biết để cập nhật view, cần dùng this.cdr.detectChanges();
    // để yêu cầu angular chạy chức năng kiểm tra và cập nhật state lên view
    // this.ngZone.runOutsideAngular(() => {
    //   setTimeout(() => {
    //     this.value = 20;
    //     console.log('this: ', this);
    //     this.cdr.detectChanges();
    //   }, 0);
    // });
  }
  putToArr() {
    this.value.push(3);
  }
}
