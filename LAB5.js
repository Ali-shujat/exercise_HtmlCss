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

class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }
    toString(){
        return this.firstName+this.lastName +("Age:"+this.age, "email"+this.email)
    }
}
let person = new Person('Maria', 'Petterson', 22, 'mp@gmail.com');
console.log(person);



