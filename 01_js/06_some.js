// 배열중 하나라도 통과하면 True 반환, 아니면 False, 빈배열은 항상 False

const arr = [1, 2, 3, 4, 5]

// 1.
const result = arr.some(function (elem) {
    return elem % 2 === 0
})
// 2.
const result = arr.some((elem) => {
    return elem % 2 === 0
})
// 3.
const result = arr.some((elem) => elem % 2 === 0)