//Lesson 1: prototypes

const person = {
    name: 'khushbakht',
    age: 29,
    hela: function() {
        console.log('HELA');
    },
}

Object.prototype.sayHi = function() {
    console.log('what?sayHi');
}
const lena = Object.create(person);

lena.name = 'Elena';
lena.age = 24;

//Lesson 2: Context THIS, and how CALL, BIND, and APPLY works

function hello() {
    console.log('HELLO', this);
}
const obj1 = {
    name: "LeBron",
    age: 38,
    sayHello: hello,
    sayHelloWindow: hello.bind(),
}
























/*
console.log('smth first');
setTimeout(function() {
    console.log('should be second');
}, 0);
console.log('end');
console.log('last one');
*/