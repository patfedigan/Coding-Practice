// 1. Basic Types
// TODO: Declare a variable called isStudent of type boolean and set it to true.
// TODO: Declare a variable called score of type number and set it to 100.
// TODO: Declare a variable called studentName of type string and set it to your name.

// Your code here:
var isStudent: boolean = true;
var score: number = 100;
var studentName: string = "John Doe";

// 2. Functions
// TODO: Write a function called multiply that takes two numbers and returns their product.
// TODO: Call the function with the numbers 4 and 5, and store the result in a variable called product.

// Your code here:
function multiply(a: number, b: number): number {
    return a * b;
}

var product: number = multiply(4, 5);
console.log(product);

// TIP: To debug or test outputs in TypeScript, use console.log just like in JavaScript:
// Example: console.log(product);

// 3. Interfaces
// TODO: Create an interface called Book with properties title (string) and pages (number).
// TODO: Create a variable called myBook of type Book and assign it a value.
// HINT: An interface defines the shape of an object. Example:
// interface Example { property: type; }

// Your code here:

interface Book {
    title: string;
    pages: number;
}

var myBook: Book = {
    title: "The Great Gatsby",
    pages: 180
};

// 4. Classes
// TODO: Create a class called Rectangle with properties width and height (both numbers).
// TODO: Add a method called area that returns the area of the rectangle.
// TODO: Create an instance of Rectangle and call the area method.
// HINT: A class is like a blueprint for objects. Example:
// class Example { constructor(public property: type) {} }

// Your code here:

class Rectangle {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    area(): number {
        return this.width * this.height;
    }
}

var rectangle = new Rectangle(10, 20);
console.log(rectangle.area());

// 5. Generics
// TODO: Create a generic function called identity that takes a parameter of any type and returns it.
// TODO: Call the function with a string and a number, and store the results in variables called stringResult and numberResult.
// HINT: Use <T> to define a generic type parameter. Example:
// function example<T>(param: T): T { return param; }

// Your code here:
function identity<T>(param: T): T { return param; }

var stringResult: string = identity<string>("Hello");
var numberResult: number = identity<number>(123);

// 6. Union Types
// TODO: Write a function called printStatus that takes a parameter which can be either a string or a number.
// TODO: Inside the function, print out the value.
// HINT: Use the union type syntax: param: string | number

// Your code here:
function printStatus(param: string | number) {
    console.log(param);
}

// 7. Type Aliases
// TODO: Create a type alias called Coordinates for an object with lat and lng properties (both numbers).
// TODO: Create a variable called home of type Coordinates.
// HINT: Use the type keyword. Example:
// type Example = { property: type; }

// Your code here:
type Coordinates = {
    lat: number;
    lng: number;
}

var home: Coordinates = {
    lat: 37.7749,
    lng: -122.4194
}

// 8. Enums
// TODO: Create an enum called Color with values Red, Green, and Blue.
// TODO: Create a variable called favoriteColor of type Color and assign it a value.
// HINT: Use the enum keyword. Example:
// enum Example { Value1, Value2 }

// Your code here:
enum Color {
    Red,
    Green,
    Blue
}

var favoriteColor: Color = Color.Red;

// 9. Optional Properties
// TODO: Create an interface called Movie with properties title (string) and optional rating (number).
// TODO: Create a variable called myMovie of type Movie with only the title property.
// HINT: Use ? to mark a property as optional. Example:
// interface Example { property?: type; }

// Your code here:
interface Movie {
    title: string;
    rating?: number;
}

var myMovie: Movie = {
    title: "Inception"
}

// 10. Type Assertions
// TODO: Create a variable called mixedData of type any and set it to a string.
// TODO: Use a type assertion to get the length of the string and store it in a variable called dataLength.
// HINT: Use the 'as' keyword for type assertions. Example:
// let length = (value as string).length;

// Your code here:
var mixedData: any = "Hello";

let dataLength = (mixedData as string).length;
