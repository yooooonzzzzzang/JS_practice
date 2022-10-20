// 단어 
function palindrome(str) {
  const reverseStr = str.split('').reverse().join('')
  if (reverseStr === str) {
    return true
  } else {
    return false
  }
}
// 띄어쓰기가 있는 문장
function isPalindrome(str) {
  const nospaceStr = str.split(' ').join('')
  const reverStr = str.split('').reverse().join('').replace(/(\s*)/g, '')
  if (nospaceStr === reverStr) {
    return true
  } else {
    return false
  }
}






// 출력
console.log(palindrome('level'))
console.log(palindrome('hi'))