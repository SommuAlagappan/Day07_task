//1. Create a parent class called shapes
//2. create a child class circle,rectangle,square for a parent class shapes
//3. Create a object for all these child classes and access the functions inside child class

class shapes{
    constructor(radius, length, breadth, sides){
    this.radius = radius;
    this.length = length;
    this.breadth = breadth;
    this.sides = sides;
    }
}

class circle extends shapes{
    constructor(r){
        super(r)
    }
    

    area(){
        return 3.14*this.radius*this.radius
    }

    circumference(){
        return 2*3.14*this.radius
    }
}

class rectangle extends shapes{
    constructor(r,l,b,s){
        super(r,l,b,s)
    }

    area(){
        return this.length*this.breadth
    }
    
    perimeter(){
        return 2*(this.length + this.breadth)
    }
}

class square extends shapes{
    constructor(r,l,b,s){
        super(r,l,b,s)
    }
    area(){
        return this.sides*this.sides;
    }
    
    perimeter(){
        return 4*this.sides;
    }
}




const circleObj = new circle(5);
console.log(circleObj.area());                
console.log(circleObj.circumference());       
console.log(circleObj.radius);                


const recatngleObj = new rectangle(0,5,10,0);
console.log(recatngleObj.area());            
console.log(recatngleObj.perimeter());       
console.log(recatngleObj.length);            
console.log(recatngleObj.breadth);           


const squareObj = new square(0,0,0,8);
console.log(squareObj.area());               
console.log(squareObj.perimeter());          
console.log(squareObj.sides);                
