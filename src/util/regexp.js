const reg = new RegExp("^\\+?[1-9][0-9]*$");
console.log(reg.test('123'))
console.log(reg.test(123))
console.log(reg.test('s123'))
console.log(reg.test('-10'))
console.log(reg.test('+10'))
