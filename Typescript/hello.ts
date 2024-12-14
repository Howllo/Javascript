let message : string;
let num : number;

message = "Hello World!";
console.log(message);

let test = 124;

if(message === "Hello World!"){
    console.log("It worked!")
}

let counter = 99;
let maxValue = 50;

counter < maxValue ? counter++ : counter = 0;
 
console.log(counter);

class Person {
    private _ssn: string;
    private _firstName: string;
    private _lastName: string;

    constructor(ssn: string, firstName: string, lastName: string){
        this._ssn = ssn;
        this._firstName = firstName;
        this._lastName = lastName;
    }

    public get firstName(): string {
        return this._firstName;
    } 

    public get lastName(): string {
        return this._lastName;
    }

    public get fullName(): string {
        return this.constructName();
    }

    public get social(): string {
        return this._ssn;
    }

    protected constructName(): string {
        return `${this._firstName} ${this._lastName}`;
    }
}

let person1: Person = new Person("555-55-5555", "John", "Doe");

console.log(`First Name: \t${person1.firstName}`);
console.log(`Last Name: \t${person1.lastName}`);
console.log(`Full Name: \t${person1.fullName}`);
console.log(`SSN: \t\t${person1.social}`);

type alphanumeric = string | Number;
function add(a: alphanumeric, b: alphanumeric): string | number {
    if(typeof a === 'string' && typeof b === 'string'){
        return `${a.toString()} ${b.toString()}`;
    }
    
    if(typeof a === 'number' && typeof b === 'number'){
        return a + b;
    }

    return 0;
}

console.log(add("Hello", "World"));
console.log(add(1, 2));

enum Test {
    SUCCESS = 200, 
    CREATED = 201,
}

enum StringTest {
    SUCCESS = "200",
    CREATED = "201"
}

console.log(`Enum Number: ${Test.CREATED}`);
console.log(`Enum String: ${Test.SUCCESS}`);