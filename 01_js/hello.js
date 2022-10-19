// console.log('hello javascript')
// function add(num1, num2) {
//     return num1 + num2
// }
// console.log(add(2, 7))


// const sub = function (num1, num2) {
//     return num1 - num2
// }

// console.log(sub(2, 7))

// const greeting = function (name = 'Anonmous') {
//     return `Hi ${name}`
// }

// console.log(greeting())

// const greeting = (name) => `Hi ${name}`


// console.log(greeting())

// function (num) {
//     return num ** 3
// }
// // 즉시실행 함수
//  ((num) => num ** 3)(2)

const numbers = [1, 2, 3, 4, 5]
console.log(numbers[-1])
// 마지막 인덱스
console.log(numbers[numbers.length - 1])
numbers.reverse()
console.log(numbers)

numbers.push(100)
console.log(numbers)

numbers.pop()
console.log(numbers)


console.log(numbers.includes(100))

console.log(numbers.indexOf(3))
console.log(numbers.indexOf(100))

console.log(numbers.join())
console.log(numbers.join(''))
console.log(numbers.join(' '))
console.log(numbers.join('-'))


