export function randomNum(includeMin, excludeMax) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * includeMin, 10)
        case 2:
            return parseInt(Math.random() * (excludeMax - includeMin) + includeMin, 10)
        default:
            return 0;
    }
}

for (let i = 0; i < 20; i++) {
    console.log(randomNum(10, 20))
}
