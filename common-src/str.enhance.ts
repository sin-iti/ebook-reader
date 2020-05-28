import { randInt } from "./num.enhance";

export const defaultCharList: string[] = [
    "a", "b", "c", "d", "e", "f", "g",
    "h", "i", "j", "k", "l", "m", "n",
    "o", "p", "q", "r", "s", "t",
    "u", "v", "w", "x", "w", "z"
];

export function randChar(charList: string[] = defaultCharList) {
    const randIndex = randInt(charList.length);
    return charList[randIndex];
}

export function randWord(wordLen: number = 4, charList: string[] = defaultCharList): string {
    let str: string = "";
    while (wordLen--) {
        str += randChar(charList);
    }
    return str;
}

export function toPosixPath(pathname: string) {
    return pathname.replace(/\\/g, "/");
}