import { firstName, lastName, year } from './export-module.js'
import * as util from './export-module.js'
import circumference from './export-default.js'

console.log(firstName)
console.log(lastName)
console.log(year)
console.log(util.area(4))
console.log(circumference(4))