const numbers = [90, 80, 70, 100]

// 총합
const sumNums = numbers.reduce(function (result, number) {
    return result + number
}, 0)

const sumNums = numbers.reduce((result, number) => {
    return result + number
}, 0)

// 평균값
const avgNums = numbers.reduce((result, number) => result + number, 0) / numbers.length
console.log(sumNums)