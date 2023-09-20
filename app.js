import lodash from 'lodash'
const arrayManipulation = () =>{
const numbers = [3, 4, 1, 2, 5];
const number2 = [3, 3, 1, 2, 5];
console.log(lodash.sortBy(numbers))
console.log(lodash.filter(numbers, (num) => num % 2 === 0))
console.log( lodash.map(numbers, (num) => num * 2))
console.log(lodash.uniq(number2))
console.log(lodash.sum(number2))
}
arrayManipulation()
