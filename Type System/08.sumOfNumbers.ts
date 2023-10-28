function sumOfNumbers(n: string, m: string): void {
    let result = 0;

    for (let i = Number(n); i <= Number(m); i++) {
        result += i;
    }

    console.log(result);

}

sumOfNumbers("1", "5");
sumOfNumbers("-8", "20");