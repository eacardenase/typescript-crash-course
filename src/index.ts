// Basic types
let id: number = 5;
let company: string = 'Astound';
let isPublic: boolean = true;
let x: any = 'Hello';

let ids: number[] = [1, 2, 3, 5];
let arr: any[] = [1, 2, '4', false];

// Tuple
let person: [number, string, boolean] = [1, 'hello', true];
// Tuple Array
let employee: [number, string][];

employee = [
    [1, '1'],
    [1, '2'],
    [3, '3'],
];

// Unions
let pid: number | string = 2;
pid = 'hello';

// Enum
enum Direction {
    Up,
    Down,
    Left,
    Right,
}

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right',
}

// Objects
type UserType = {
    id: number;
    name: string;
};

const user: UserType = {
    id: 1,
    name: 'Edwin',
};

// Type Assertion
let cid: any = 1;
let customerId = <number>cid;
// let customerId = cid as number;

// Functions
function addNumber(x: number, y: number): number {
    return x + y;
}

// Void
function logMessage(message: string | number): void {
    console.log(message);
}

// Interfaces
interface UserInterface {
    readonly id: number; // readonly property
    name: string;
    age?: number; // optional property
}

const anotherUser: UserInterface = {
    id: 1,
    name: 'Edwin',
};

// You can use Types for primitives and unions
type Point = number | string;
const point1: Point = 1;

// You cannot use Interfaces with primitives or unions, but you can use them with objects and functions
interface MathFunc {
    (x: number, y: number): number;
}

const addFunc: MathFunc = (x: number, y: number): number => {
    return x + y;
};

const subFunc: MathFunc = (x: number, y: number): number => {
    return x - y;
};

// Classes
interface PersonInterface {
    id: number; // readonly property
    name: string;
    register(): string;
}

class Person implements PersonInterface {
    id: number;
    name: string;

    constructor(id: number, name: string) {
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
    position: string;

    constructor(id: number, name: string, position: string) {
        super(id, name);
        this.position = position;
    }
}

const emp = new Employee(1, 'Edwin', 'Wed Developer');

// Generics
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(['edwin', 'ana']);

numArray.push(5);
