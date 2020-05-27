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
    constructor(private route: ActivatedRoute) { }
    ngOnInit(): void {
        this.route.params.subscribe((param) => {
            console.log(param);
        });
    }
}