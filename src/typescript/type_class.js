var Animal = /** @class */ (function () {
    function Animal(name, age) {
        this.name = name;
        this.age = age;
    }
    return Animal;
}());
var a = new Animal('Jack', 20);
console.log(a.name);
a.name = 'Tom';
console.log(a.name);
a.age = 10; // private 不能直接获取
console.log(a.age);
