interface Person {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: string | number | Function;
    run(): string;
}

let tom: Person = {
    id: 1,
    name: 'Tom',
    age: 10,
    run: () => `Hello, ${tom.name}`
}

let mike: Person = {
    id: 2,
    name: 'Mike',
    run(): string {
        return "";
    },
}

let john: Person = {
    id: 3,
    name: 'Tom',
    age: 10,
    sex: 'male',
    address: 'china',
    run(): string {
        return "";
    },
}
