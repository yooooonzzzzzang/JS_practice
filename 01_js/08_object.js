const myInfo = {
    name: 'jack',
    phoneNumber: '123456',
    'samsung product': {
        buds: 'Buds pro',
        galaxy: 'S99',
    },
}

// console.log(myInfo.name)
// console.log(myInfo['name'])

// console.log(myInfo['samsung product'].galaxy)
// console.log(myInfo['samsung product']['galaxy'])

// 
const obj = {
    name: 'jack',
    greeting() {
        return 'hi!'
    }
}
// console.log(obj.name)
// console.log(obj.greeting())


const jsonData = {
    coffee: 'Americano',
    icecream: 'Mint Choco',
}

// Object -> json
const objToJson = JSON.stringify(jsonData)
console.log(typeof objToJson)
console.log(objToJson)

// json -> Object
const jsonToObj = JSON.parse(objToJson)
console.log(typeof jsonToObj)
console.log(jsonToObj)
console.log(jsonToObj.coffee)
