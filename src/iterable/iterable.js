const RoleSix = {
    GIRL: "girl",
    DETECTIVE: "detective",
    SISTER: "sister",
    GAMBLER: "gambler",
    EXPLORER: "explorer",
    CAPO: "capo"
}

const indices = [1,2]

for (let [index, item] of Object.values(RoleSix).entries()) {
    for (let i of indices) {
        if (index === i) {
            console.log(index)
            console.log(item)
        }
    }
}
