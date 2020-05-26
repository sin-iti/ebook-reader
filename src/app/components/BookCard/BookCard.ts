import { Component, OnInit, Input } from '@angular/core';


export namespace BookCardComponent {
    export interface BaseInfo {
        createTime: number | string | Date;
        cover: string;
        name: string;
    }
}

@Component({
    selector: "c-book-card",
    templateUrl: "./BookCard.html",
    styleUrls: [
        "./BookCard.scss"
    ]
})
export class BookCardComponent implements OnInit {
    @Input()
    showTime: boolean = true;
    @Input()
    bookInfo: BookCardComponent.BaseInfo;

    ngOnInit(): void {

    }

    showTimeText(createTime: number | string | Date) {
        return "23分钟前"
    }
    getStyleOfCard(): Partial<CSSStyleDeclaration> {
        const style: Partial<CSSStyleDeclaration> = {};
        if (this.bookInfo.cover) {
            style.backgroundImage = `url("${this.bookInfo.cover}")`;
        }
        return style;
    }
}
