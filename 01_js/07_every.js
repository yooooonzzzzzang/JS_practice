// 배열 모든 요소가 주어진 판별함수를 통과해야 참, 빈 배열 항상 True
const arr = [1, 2, 3, 4, 5]

// 1.
const result = arr.every(function (elem) {
    return elem % 2 === 0
})
// 2.
const result = arr.every((elem) => {
    return elem % 2 === 0
})
// 3.
const result = arr.every((elem) => elem % 2 === 0)