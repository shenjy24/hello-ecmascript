import qs from 'qs'

let args = qs.parse('user=tom&age=22')
console.log(args)

let str = qs.stringify(args)
console.log(str)
