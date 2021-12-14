import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  DoCheck,
  OnChanges,
  SimpleChanges,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'app-bcom',
  templateUrl: './bcom.component.html',
  styleUrls: ['./bcom.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush, // thêm vào để không dùng tính năng mặc định
})
export class BcomComponent implements OnInit, DoCheck, OnChanges {
  @Input()
  value!: any;
  oldLength = this.value?.lenght;
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {}
  ngDoCheck() {
    console.log('run do check', this.value);
    // OnPush khiến cho component không render lại khi địa chỉ vùng nhớ input không đổi, ta phải ép component rerender
    if (this.value?.length !== this.oldLength) {
      this.cdr.markForCheck();
      this.oldLength = this.value?.lenght;
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes: ', JSON.stringify(changes)); // nếu không chuyển sang string thì không thấy được sự khác biệt do trỏ chung địa chỉ vùng nhớ
  }
  check() {
    console.log('check');
  }
  ngAfterContentInit() {
    console.log('run ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('run ngAfterContentChecked');
  }
  ngAfterViewChecked() {
    console.log('run ngAfterViewChecked');
  }
}
