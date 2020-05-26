export function randInt(min: number, max: number = 0): number {
    if (max < min) {
        const tmp: number = max;
        max = min;
        min = tmp;
    }
    return Math.floor(Math.random() * (max - min) + min);
}


