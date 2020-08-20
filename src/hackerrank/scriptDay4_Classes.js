/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */

//well oops, I did this as a function, not a class!
/*
function Polygon (sides) {
    this.perimeter = function() {
        let sumOfSides = 0;
        for (let p in sides) {
            sumOfSides += sides[p];
        }
        return sumOfSides;
    }
}
*/

class Polygon {
    constructor(sides) {
        this.sides = sides;
    }
    perimeter() {
        return(this.sides.reduce((sumofSides, currVal) => sumofSides + currVal));
    }
}
/* in discussion
class Polygon{
    constructor(sides){
        this.sides = sides
    }
    perimeter() {
        return this.sides.reduce(function add(a,b){return a+b;})
    }
}
and another eg
class Polygon {
    constructor(s) {
        this._perimeter = s.reduce((a, c) => a + c);
    }
    perimeter() {
        return this._perimeter;
    }
}
*/

const rectangle = new Polygon([10, 20, 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);

console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());

