/*
const generator = countThings();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
*/
/*
function fibonacci(n) {
    if (n < 1) return 0
    if (n == 2) return 1

    return fibonacci(n - 1) + fibonacci(n -2)
}

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
*/

function* fibonacci(){
    yield 0
    yield 1

    let firsRecent = 0
    let secondRecent = 1

    while(true) {
        const value = firsRecent + secondRecent
        yield value

        firsRecent = secondRecent
        secondRecent = value
    }
}

const generator = fibonacci();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());