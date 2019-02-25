import { chunk, compact } from 'lodash'

var input = [1,2,3]
var output = chunk(input, 2)
console.log(output)

input = [true, false, 1, 2]
var output = compact(input, 2)
console.log(output)

console.log(Array(3))