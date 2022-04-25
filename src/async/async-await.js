function timeout(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}

async function asyncPrint(value, ms) {
    await timeout(ms)
    console.log(`${Date.now()} : ${value}`)
}

async function f() {
    await timeout(5000)
    return 'hello world'
}

async function f1() {
    // f().then(v => console.log(v))
    let r = await f()
    console.log(Date.now()) 
}

function f2() {
    console.log('f2')
}

f1()
f2()
console.log(Date.now())
