import { Component, OnInit, Input } from '@angular/core';
export namespace HtmlArrowComponent {
  export type Direction = "up" | "down" | "left" | "right";
}
@Component({
  selector: 'c-html-arrow',
  templateUrl: './html-arrow.component.html',
  styleUrls: ['./html-arrow.component.scss']
})
export class HtmlArrowComponent implements OnInit {
  @Input()
  private arrowDirection: HtmlArrowComponent.Direction = "up";
  constructor() { }

  ngOnInit(): void {
  }
  get direction(): string {
    return 'arrow-' + this.arrowDirection;
  }
}
