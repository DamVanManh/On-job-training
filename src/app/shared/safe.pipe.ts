import { DomSanitizer } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'safe',
})
export class SafePipe implements PipeTransform {
  constructor(private sanz: DomSanitizer) {}
  transform(value: any): any {
    // bypassSecurityTrustResourceUrl để đảm bảo với angular là nó an toàn có thể hiển thị lên màn hình
    return this.sanz.bypassSecurityTrustResourceUrl(value);
  }
}
