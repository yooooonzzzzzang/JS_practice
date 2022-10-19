// 1.
const colors = ['red', 'blue', 'green']
const printColor = function (color) {
    console.log(color)
}

colors.forEach(printColor)

// 2.
colors.forEach(function (color) {
    console.log(color)
})

// 3.
colors.forEach((color) => {
    console.log(color)
})

colors.forEach((color) => console.log(color))
