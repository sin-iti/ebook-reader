import { BookService } from './../../service/book.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
    selector: "p-home",
    templateUrl: "./home.component.html",
    styleUrls: [
        "./home.component.scss"
    ]
})
export class HomeComponent implements OnInit {
    public readonly sortTypeList: string[] = [
        "PAGES.HOME.BOOK_ALL",
        "PAGES.HOME.BOOK_CLASSIFY",
    ];
    public readonly orderTypeList: string[] = [
        "PAGES.HOME.ORDER_TYPE.NEW",
        "PAGES.HOME.ORDER_TYPE.NAME",
    ];
    protected searchRefer: string = "";
    protected actSortType: string = this.sortTypeList[0];
    protected focusStateSearch: boolean = false;
    protected actOrderType: string = this.orderTypeList[0];
    private bookService: BookService;
    private bookList: BookService.BookInfo[] = [];
    constructor(private route: ActivatedRoute, private router: Router) {
        this.bookService = new BookService();
    }
    ngOnInit(): void {
        console.log(location.href);
        this.loadBookList();
    }
    updateActSortType(sortType: string) {
        this.actSortType = sortType;
    }
    updateFocusState(newState: boolean) {
        this.focusStateSearch = newState;
    }
    loadBookList() {
        this.bookService.getList().subscribe((list) => {
            this.bookList = list;
        });
    }
    clickBookCard() {
        this.router.navigate([`readBook/` + 12])
        console.log("click book card");
    }
}
