//Person class

class Person {
  constructor(firstName, lastName, age, country, city) {
    this.name = firstName;
    this.name2 = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
  }

  getFullName() {
    return `${this.name} ${this.name2}`;
  }

  getDetails() {
    return `
      Name: ${this.name}
      Age: ${this.age}
      Country: ${this.country}
      City: ${this.city}
    `;
  }
}

const person1 = new Person('John', 'Doe', 30, 'USA', 'Newyork');
const person2 = new Person('Jane', 'Smith', 25, 'India', 'Delhi');

console.log(person1.getDetails());
console.log(person2.getDetails());
console.log(person1.getFullName());


//Movie class

class Movie {
  constructor(title, studio, ratings) {
    this.title = title;
    this.studio = studio;
    this.ratings = ratings;
    if(typeof this.ratings == 'undefined'){
        this.ratings='PG';
    }
    
}
getPG(movie) {
let res =[];
for(let i=0; i<movie.length;i++){
    if(movie[i].ratings=='PG'){
    res.push(movie[i].title)
    }
}
  return res;  
}
}

var c1 = new Movie("Casino Royal", "EON Productions", "PG13")
var c2 = new Movie("Jailer","Sun Pictures")
var c3 = new Movie("The Dark Knight","Warner Bros","PG9")
var c4 = new Movie("Bad Boys","Columbia Pictures","PG6.8")
var c5 = new Movie("The Wolf of Wall Street","Red Granite Pictures","PG8.2")
var c6 = new Movie("Avatar","Twentieth Century Fox","PG7.9")
var arr = [c1,c2,c3,c4,c5,c6];
console.log(c1.getPG(arr))
console.log(c1)

//Circle class

class Circle{
  constructor(radius,color){
      this.radius = radius;
      this.color = color;
  }
  getColor(){
      return this.color;
  }
  setColor(color){
      this.color = color;
  }
  toString(){
      return ('Circle[radius = '+this.radius +', color = '+this.color+']')
  }
  getRadius(){
      return this.radius;
  }
  setRadius(radius){
      this.radius = radius;
  }
  getArea(){
      return (Math.PI*this.radius*this.radius)
  }
  getCircumference(){
      return (2*Math.PI*this.radius)   
  }
  
}
var c1 = new Circle( 2, "red");
console.log(c1);
console.log(c1.getColor());
console.log(c1.getArea());
console.log(c1.getRadius());
console.log(c1.getCircumference());
c1.setColor("green");
console.log(c1.getColor());
c1.setRadius(3);
console.log(c1.getRadius());
console.log(c1.toString());


// Uber price

class Uber{
  constructor(km,price){
      this.km = km;
      this.price = price;
  }
  getDistance(){
      return this.km;
  }
  setDistance(travelled){
      this.km = travelled;
  }
  calculate(endDistance){
      let res = 0;
      if(endDistance <=8){
          res = 150;
      }
      else{
          res = endDistance*this.price;
      }
      return res;
  }
  
}
var u1 = new Uber(12, 18);
console.log(u1.getDistance());
u1.setDistance(20);
console.log(u1.getDistance());
console.log(u1.calculate(20));

