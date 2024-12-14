var message;
var num;
message = "Hello World!";
console.log(message);
var test = 124;
if (message === "Hello World!") {
    console.log("It worked!");
}
var counter = 99;
var maxValue = 50;
counter < maxValue ? counter++ : counter = 0;
console.log(counter);
var Person = /** @class */ (function () {
    function Person(ssn, firstName, lastName) {
        this._ssn = ssn;
        this._firstName = firstName;
        this._lastName = lastName;
    }
    Object.defineProperty(Person.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "fullName", {
        get: function () {
            return this.constructName();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "social", {
        get: function () {
            return this._ssn;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.constructName = function () {
        return "".concat(this._firstName, " ").concat(this._lastName);
    };
    return Person;
}());
var person1 = new Person("555-55-5555", "John", "Doe");
console.log("First Name: \t".concat(person1.firstName));
console.log("Last Name: \t".concat(person1.lastName));
console.log("Full Name: \t".concat(person1.fullName));
console.log("SSN: \t\t".concat(person1.social));
function add(a, b) {
    if (typeof a === 'string' && typeof b === 'string') {
        return "".concat(a.toString(), " ").concat(b.toString());
    }
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    return 0;
}
console.log(add("Hello", "World"));
console.log(add(1, 2));
var Test;
(function (Test) {
    Test[Test["SUCCESS"] = 200] = "SUCCESS";
    Test[Test["CREATED"] = 201] = "CREATED";
})(Test || (Test = {}));
var StringTest;
(function (StringTest) {
    StringTest["SUCCESS"] = "200";
    StringTest["CREATED"] = "201";
})(StringTest || (StringTest = {}));
console.log("Enum Number: ".concat(Test.CREATED));
console.log("Enum String: ".concat(Test.SUCCESS));
