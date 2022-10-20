const users = [
  { name: 'Jack', age: 31, isMarried: true, balance: 100, },
  { name: 'Sarah', age: 22, isMarriefd: false, balance: 200, },
  { name: 'Ash', age: 25, isMarried: true, balance: 300, },
  { name: 'Robert', age: 27, isMarried: false, balance: 400, },
  { name: 'Tom', age: 35, isMarried: true, balance: 500, },
]

// 1. forEach 메서드를 활용해 모든 사용자들의 이름을 출력하시오.
users.forEach((user) => {
  console.log(user.name)
})

// 2. filter 메서드를 활용해 결혼한 사람들만 모아 marriedUsers 상수에 할당하시오.
const marriedUsers = users.filter((user) => {
  return user.isMarried === true
})

// 3. find 메서드를 활용해 이름이 'Tom'인 사람만 tom 상수에 할당하시오.
const tom = users.find((user) => {
  return user.name === 'Tom'
})
console.log(tom)

// 4. map 메서드를 활용해 모든 사용자에게 isAlive 키를 추가하고 true로 설정한 뒤, newUsers 상수에 할당하시오.
newUsers = users.map((user) => {
  user.isAlive = true
  return user
})

// 5. reduce 메서드를 활용해 모든 사용자들의 계좌잔액을 totalBalance 상수에 할당하시오.
const totalBalance = users.reduce((money, user) => {
  return money + user.balance
}, 0)
