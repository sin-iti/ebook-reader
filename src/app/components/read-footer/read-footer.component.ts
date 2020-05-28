import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'c-read-footer',
  templateUrl: './read-footer.component.html',
  styleUrls: ['./read-footer.component.scss']
})
export class ReadFooterComponent implements OnInit {
  @Input()
  private nowPage: number = 1;
  @Input()
  private totalPage: number = 47;
  private percent: number = 50;
  @Output()
  private updatePage = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
  nowPageUpdated(num: number) {
    if (this.totalPage) {
      this.percent = Math.round(num / this.totalPage * 100);
      this.emitUpdatePage();
    }
  }
  percentUpdated(percent: number) {
    this.nowPage = Math.round(percent / 100 * this.totalPage);
    this.emitUpdatePage();
  }
  emitUpdatePage() {
    this.updatePage.emit(this.nowPage);
  }
  nowPageModelUpdated() {
    setTimeout(() => {
      this.nowPage = Math.min(parseInt(this.nowPage.toString()) || 1, this.totalPage);
      this.nowPageUpdated(this.nowPage);
    }, 20);
  }
}
