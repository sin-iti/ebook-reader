import { Component, OnInit, EventEmitter, Output } from '@angular/core';
export namespace MoreSettingComponent {
  export interface FontItem {
    value: string;
    text: string;
  }
  export interface EvtUpdateFontBolder {
    update: "bolder",
    data: boolean;
  }
  export interface EvtUpdateLineHeight {
    update: "lineHeight",
    data: number;
  }
  export interface EvtUpdateFontFamily {
    update: "fontFamily",
    data: string;
  }
  export type EvtUpdateType = EvtUpdateFontBolder | EvtUpdateLineHeight | EvtUpdateFontFamily;
}

function createFontItem(text: string, value?: string): MoreSettingComponent.FontItem {
  if (!value) {
    value = text;
  }
  return {
    value,
    text
  };
}

@Component({
  selector: 'c-more-setting',
  templateUrl: './more-setting.component.html',
  styleUrls: ['./more-setting.component.scss']
})
export class MoreSettingComponent implements OnInit {
  private selectFontValue: string = "";
  private fontBolder: boolean = false;
  private lineHeight: number = 1.5;
  @Output()
  private updateReader: EventEmitter<MoreSettingComponent.EvtUpdateType> = new EventEmitter();
  public readonly fontList: MoreSettingComponent.FontItem[] = [
    {
      text: "图书默认",
      value: "book"
    },
    createFontItem("黑体"),
    createFontItem("楷体"),
    createFontItem("隶书")
  ];

  constructor() {
    this.selectFontValue = this.fontList[0].value;
  }

  ngOnInit(): void {
  }
  updateItem(item: string, data: any) {
    this.updateReader.emit({
      update: item as any,
      data
    });
  }
}
