let user = {
    'name': 'Tom',
    'age': 10
}

let resolve
let action = 1
const promise = new Promise(function (resolve) {
    global.resolve = resolve
})

promise.then((e) => {
    console.log('hi')
})

