import { MoreSettingComponent } from './../../components/more-setting/more-setting.component';
import { HtmlArrowComponent } from './../../components/html-arrow/html-arrow.component';
import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector: "p-read-book",
    templateUrl: "./readBook.component.html",
    styleUrls: [
        "./readBook.component.scss"
    ]
})
export class ReadBookComponent implements OnInit {
    private arrowDirection: HtmlArrowComponent.Direction = "down";
    private fullscreenIcon: "fullscreen" | "fullscreen-exit" = "fullscreen";
    private hideOpRow: boolean = false;
    private hideMenu: boolean = false;
    private fontSize: number = 16;
    private fontBolder: boolean = false;
    private lineHeight: number = 1.5;
    private fontFamily: string = "Microsoft Yahei";
    private pageNo: number = 2;
    private pageTotal: number = 40;
    private color: string;
    private showPanelMoreSetting: boolean = false;
    public readonly minFontSize = 10;
    public readonly colorList: string[] = [
        "#fcfcfc",
        "#f9f4e9",
        "#ceeaba",
        "#6d6d6f",
        "#3b403c",
    ];
    constructor(private route: ActivatedRoute, private elm: ElementRef) { }
    ngOnInit(): void {
        this.route.params.subscribe((param) => {
            console.log(param);
        });
    }
    toggleReadModePanel() {
        if (this.arrowDirection === "down") {
            this.arrowDirection = "up";
        } else {
            this.arrowDirection = "down";
        }
    }
    updateFontSize(action: "minus" | "add") {
        if (action === "add") {
            this.fontSize++;
        } else {
            const fontSize = this.fontSize - 1;
            this.fontSize = Math.max(this.minFontSize, fontSize);
        }
    }
    toggleFullScreen() {
        const elm = this.elm.nativeElement;
        if (this.fullscreenIcon === "fullscreen") {
            // console.log(elm)
            elm.requestFullscreen();
            this.fullscreenIcon = "fullscreen-exit";
        } else {
            document.exitFullscreen();
            this.fullscreenIcon = "fullscreen";
        }
    }
    pageNoUpdate(newPageNo: number) {
        this.pageNo = newPageNo;
    }
    toggleHide() {
        this.hideOpRow = !this.hideOpRow;
    }
    toggleMenuHide() {
        this.hideMenu = !this.hideMenu;
    }
    updateReadColor(color: string) {
        this.color = color;
    }
    updateReader(evt: MoreSettingComponent.EvtUpdateType) {
        console.log(evt);
    }
    togglePanelMoreSetting() {
        this.showPanelMoreSetting = !this.showPanelMoreSetting;
    }
}