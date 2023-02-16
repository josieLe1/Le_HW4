const r = Number(prompt("Enter the circle radius:"));

const circle = {
  circumference() {
    return 2*3.14*r;
  },
  area() {
    return r**2*3.14;
  }
}

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);