class Animal {
    public name;
    private age
    public constructor(name, age) {
        this.name = name
        this.age = age
    }
}

let a: Animal = new Animal('Jack', 20)
console.log(a.name)
a.name = 'Tom'
console.log(a.name)
a.age = 10          // private 不能直接获取
console.log(a.age)
