import { HtmlArrowComponent } from './../../components/html-arrow/html-arrow.component';
import { Component, OnInit } from '@angular/core';
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
    public readonly minFontSize = 10;
    private fontSize: number = 16;
    public readonly colorList: string[] = [
        "#fcfcfc",
        "#f9f4e9",
        "#ceeaba",
        "#6d6d6f",
        "#3b403c",
    ];
    constructor(private route: ActivatedRoute) { }
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
        console.log(`toggleReadModePanel `, this.arrowDirection);
    }
    updateFontSize(action: "minus" | "add") {
        if (action === "add") {
            this.fontSize++;
        } else {
            const fontSize = this.fontSize - 1;
            this.fontSize = Math.max(this.minFontSize, fontSize);
        }
    }
}