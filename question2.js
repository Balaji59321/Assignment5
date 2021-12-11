class Circle {
    constructor(radius=3,color="red"){
        this.radius = radius;
        this.color = color;
    }
    
    getRadius() {
        return "Radius of the Circle is " + this.radius;
    }
    
    setRadius(rad) {
        this.radius = rad;
    }
    
    getColor() {
        return "Colour of the Circle is " + this.color;
    }
    
    setColor(col) {
        this.color = col;
    }
    
    stringCon() {
        return (this.radius+this.color).toString();
    }
    
    getArea(){
        return Math.PI * (this.radius *this.radius);
    }
    
    getCirucm() {
        return 2* Math.PI * this.radius;
    }
}

let prop1 = new Circle();

//set and get of radius
console.log(prop1.getRadius());
prop1.setRadius(5);
console.log(prop1.getRadius());

//set and get of color
console.log(prop1.getColor());
prop1.setColor("Black");
console.log(prop1.getColor());


console.log(prop1.stringCon());
console.log("Area of Circle "+ prop1.getArea().toFixed(3));
console.log("Circumference of Circle " + prop1.getCirucm().toFixed(3));
