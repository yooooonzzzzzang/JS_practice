console.log('    *    ')
console.log('   ***   ')
console.log('  *****  ')
console.log(' ******* ')
console.log('*********')

for (let i = 0; i < 5; i++) {
  console.log(" ".repeat(5 - i - 1) + "*".repeat(1 + 2 * i))
}
for (let i = 0; i < 5; i++) {
  console.log("*".repeat(i + 1))
}