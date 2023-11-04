class CompareElements<T>{

    data: T[];

    constructor(data: T[]) {
        this.data = data;
    }

    compare(arg: T): number {
        return this.data.filter(el => el === arg).length;
    }
}

let c = new CompareElements(['a', 'b', 'ab', 'abc', 'cba', 'b']);
console.log(c.compare('b'));


let d = new CompareElements([1, 2, 3, 4, 5, 1, 1]);
console.log(d.compare(1));
