function pow(x, y) {
    let result = 1;
    if (y === 0) return 1;
    for (let i = 0; i < y; i++) {
        result *= x;
    }
    return result;
};

console.log(pow(2, 3));
console.log(pow(-2, 3));
console.log(pow(5, 0));
