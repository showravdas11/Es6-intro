const add = (n1, n2) => n1 + n2;

const sum = add(22, 22);
console.log(sum);

// const tenItems = (item) => item * 10;
// const multiply = tenItems(20);
// console.log(multiply)

const fiveItems = item => item * 5;
const multiply = fiveItems(20);
console.log(multiply)


// প্যারামিটার যদি একের বেশি হয় তাহলে () ইউজ করব

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    const output = result * 5
    return output;
}

const total = doMath(15, 10);
console.log(total);