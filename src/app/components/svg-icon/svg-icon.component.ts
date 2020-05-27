import { Component, OnInit, Input } from '@angular/core';

export namespace SvgIconComponent {
  export type IconType = "circle_plus" | "circle_minus";
}

@Component({
  selector: 'c-svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.scss']
})
export class SvgIconComponent implements OnInit {

  @Input()
  iconType: SvgIconComponent.IconType;



  constructor() { }

  ngOnInit(): void {
  }

}
