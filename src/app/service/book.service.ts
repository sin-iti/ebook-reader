import { Injectable } from '@angular/core';
import { Observable, of, Subscriber } from 'rxjs';
import { randInt, randWord } from "../../../common-src/enhance";

export namespace BookService {
    export interface BookInfo {
        createTime: number;
        cover: string;
        name: string;
    }
}

@Injectable({
    providedIn: "root"
})
export class BookService {
    getList(): Observable<BookService.BookInfo[]> {
        return new Observable((subscriber) => {
            subscriber.next(this.getTestList());
        });
    }
    private getTestList(): BookService.BookInfo[] {
        const list: BookService.BookInfo[] = [];
        const listNum = randInt(20, 40);
        for (let i = 0; i < listNum; i++) {
            const item: BookService.BookInfo = {
                createTime: (Date.now()) - ((Math.floor(Math.random() * 6) + 2) * 24 * 3600 * 1000),
                name: randWord(randInt(4, 40)),
                cover: ""
            };
            list.push(item);
        }
        return list;
    }
}