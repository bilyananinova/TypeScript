class Box<T> {

    public data: T;

    constructor(data: T) {
        this.data = data;
    }

    toString() {
        return typeof this.data;
    }
}

let box1 = new Box(['test']);
let box2 = new Box(20);
let box3 = new Box('Hello');

console.log(box1.toString());
console.log(box2.toString());
console.log(box3.toString());
