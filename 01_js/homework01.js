const numbers = [1, 2, 3, 4, 5]

// - for ... of 문을 사용하여 배열의 각 요소를 출력하시오.

// for (const number of numbers) {
//     console.log(number)
// }

// - for ... of 문을 사용하여 배열의 각 요소에 10을 더한 요소들로 구성된 새로운 배열을 생
// 성하시오.
// const newArr = []
// for (const number of numbers) {
//     newArr.push(number + 10)
// }

// console.log(newArr)

// - for ... of 문을 사용하여 배열의 각 요소들 중 홀수 요소 들로만 구성된 새로운 배열을 생
// 성하시오.
// const oddArr = []
// for (const number of numbers) {
//     if (number % 2 === 1) {
//         oddArr.push(number)
//     }
// }
// console.log(oddArr)

// - for ... of 문을 사용하여 배열의 각 요소들을 모두 더한 값을 구하시오.
let result = 0
for (const number of numbers) {
    result += number
}
console.log(result)