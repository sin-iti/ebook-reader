
import { Component, OnInit } from '@angular/core';

@Component({
    selector: "p-home",
    templateUrl: "./home.component.html",
    styleUrls: [
        "./home.component.scss"
    ]
})
export class HomeComponent implements OnInit {
    constructor() {
    }
    ngOnInit(): void {
        console.log(location.href)
    }
}
