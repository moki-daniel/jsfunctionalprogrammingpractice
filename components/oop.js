//use this keyword to access a specific object inside a function
const student = {
    name: "Leaky",
    age: 21,
    school: "kabete technical",
    course: "automotive engineering",
    YearOfStudy: 1,
    getName(){
        console.log(this.name)
    },
   parents: {
        name: "Daniel Sammy Moki",
        occupation: "teacher",
        role: "support the child",
        getOccupation(){
            console.log(this.name)
        },
    }
}
student.getName()
student.parents.getOccupation()

//CONSTRUCTORS
// 1. A constructor is a function that creates an instance of a class which is typically called an “object”.
// 2. In JavaScript, a constructor gets called when you declare an object using the new keyword.
// 3. The purpose of a constructor is to create an object and set values if there are any object properties present.

//special constructor function

function Vehicle(owner, model, yearOfManufacture, engineCapacity,
countryManufactured, yearOfSale) {
    this.model = model;
    this.owner = owner;
    this.yearOfManufacture = yearOfManufacture;
    this.engineCapacity = engineCapacity;
    this.countryManufactured = countryManufactured;
    this.yearOfSale = yearOfSale;
   
}
//this will be available in all instances
Vehicle.prototype.getCarSummary = function() {
    return `${this.owner}'s car was manufacturered on ${this.yearOfManufacture}. ${this.owner} bought it on ${this.yearOfSale} and it has been on the road for ${new Date().getFullYear() - this.yearOfSale} years`
}

//create an instance of several cars

const vehicle1 = new Car("Leakey", "Subaru", 2010, "4500cc", "United Kingdom", 2013)
console.log(vehicle1.getCarSummary());
const vehicle2 = new Car("Tinah", "Mercedez", 2012, "3500cc", "Germany", 2015)
console.log(vehicle2.getCarSummary());
const vehicle3 = new Car("Derrick", "RangeRover", 2011, "5500cc", "Germany", 2012)
console.log(vehicle3.getCarSummary());

//Inheritance

//inherit vehicle methods and properties from vehicle class into Lorry class

//lorry constructor
function Lorry(owner, model, yearOfManufacture, engineCapacity, countryManufactured, yearOfSale) {

Vehicle.call(owner, model, yearOfManufacture, engineCapacity, countryManufactured, yearOfSale)
}

//inherit prototype

Lorry.prototype = Object.create(Vehicle.prototype);

//instantiate lorry object

const lorry1 = new Lorry("Job", "Isuzu", 2013, "8500cc", "Kenya", 2017);

//use Lorry constructor
Lorry.prototype.constructor = Lorry;
console.log(lorry1)


//Another Iheritance sample

// parent class
class Person { 
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }
}

// inheriting parent class
class Student extends Person {

    constructor(name) {
    
        console.log("Creating student class");
        
        // call the super class constructor and pass in the name parameter
        super(name);
    }

}

let student1 = new Student('Jack');
student1.greet();



//sample prototype
//The JavaScript prototype property also allows you to add new methods to objects constructors:
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
  
  Person.prototype.name = function() {
    return this.firstName + " " + this.lastName;
  };





