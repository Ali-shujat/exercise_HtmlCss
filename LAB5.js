// 1.	Rectangle
// Write a JS class for a rectangle object.It needs to have a width(Number), height(Number) and color(String) properties,
//  which are set from the constructor and a calcArea() method, that calculates and returns the rectangle’s area.
class Rectangle {
    constructor(height, width, color) {
        this.height = height;
        this.width = width;
        this.color = color;
    }
    // Getter
    get area() {
        return this.calcArea();
    }
    // Method
    calcArea() {
        return this.height * this.width;
    }
}
let rect = new Rectangle(4, 5, 'red');
console.log(rect.area);
console.log(rect.height);
console.log(rect.width);
console.log(rect.color);
// 2.	Person
// Write a JS class that represents a personal record. It has the following properties, all set from the constructor:
// •	firstName
// •	lastName
// •	age
// •	email
// And a method toString(), which prints a summary of the information. See the example for formatting details.

class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString() {
        var str = this.firstName + ' ' + this.lastName + '(' + "Age:" + this.age + ' ' + "email:" + this.email + ')';
        return str;
    };
}
let person = new Person('Maria', 'Petterson', 22, 'mp@gmail.com');
console.log(person.toString());

// 3.	Get Persons
// Write a JS function that returns an array of Person objects. Use the class from the previous task, create the following instances, and return them in an array:
// For any empty cells, do not supply a parameter (call the constructor with less parameters).
// Input / Output
// There will be no input, the data is static and matches the table above. As output, return an array with Person instances.

var arrPer = new Array();
arrPer[0] = new Person('Exicon');
arrPer[1] = new Person('Shujat', 'ali', 38, 'i@gmail.com');
arrPer[2] = new Person('Maria', 'Petterson', 22, 'mp@gmail.com');
arrPer[3] = new Person('Stefean', 'Lars', 29, '');

for (let per in arrPer) {
    console.log(arrPer[per]);
}
// 4.	Circle
// Write a JS class that represents a Circle.It has only one data property – it’s radius, and it is set trough the constructor.The class needs to have getter and setter methods for its diameter – the setter needs to calculate the radius and change it and the getter needs to use the radius to calculate the diameter and return it.
// The circle also has a method area(), which calculates and returns its area.


class Circle {
    constructor(radius) {
        this.radius = radius;

    }
    get diameter() {
        return this.radius * 2;
    }
    set diameter(x) {
        this.radius = x / 2;
    }

    area() {
        let ar = (this.radius * this.radius) * Math.PI;
        return ar;
    };
}
// Circle.prototype.area = function() {
//     return Math.pow(this.radius, 2) * Math.PI;
//   }
let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area()}`);

c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area()}`);

// 5.	Point Distance
// Write a JS class that represents a Point. It has x and y coordinates as properties, that are set through the constructor, and a static method for finding the distance between two points, called distance().
class Point {
    constructor(_x, _y) {
        this.x = _x;
        this.y = _y;
    }
    static distance(p1, p2) {
        var a = p1.x - p2.x;
        var b = p1.y - p2.y;
        var c = Math.sqrt(a * a + b * b);
        return c;

    }
}
let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));
