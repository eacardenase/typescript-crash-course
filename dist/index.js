"use strict";
// Basic types
let id = 5;
let company = 'Astound';
let isPublic = true;
let x = 'Hello';
let ids = [1, 2, 3, 5];
let arr = [1, 2, '4', false];
// Tuple
let person = [1, 'hello', true];
// Tuple Array
let employee;
employee = [
    [1, '1'],
    [1, '2'],
    [3, '3'],
];
// Unions
let pid = 2;
pid = 'hello';
// Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'Edwin',
};
// Type Assertion
let cid = 1;
let customerId = cid;
// let customerId = cid as number;
// Functions
function addNumber(x, y) {
    return x + y;
}
// Void
function logMessage(message) {
    console.log(message);
}
const anotherUser = {
    id: 1,
    name: 'Edwin',
};
const point1 = 1;
const addFunc = (x, y) => {
    return x + y;
};
const subFunc = (x, y) => {
    return x - y;
};
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered.`;
    }
}
const Edwin = new Person(1, 'Edwin');
const Ana = new Person(2, 'Ana');
// Subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(1, 'Edwin', 'Wed Developer');
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['edwin', 'ana']);
numArray.push(5);
