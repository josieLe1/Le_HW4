function convertF(f){
  return (f-32)*(5/9)
}

console.log(`32 degrees Fahrenheit = ${convertF(32)} degree Celcius`);
console.log(`Temperature of 98.7 Fahrenheit is equivalent to ${convertF(98.7)} degrees Celcius`)
console.log(`Water boiling temperature is 212 Fahrenheit or ${convertF(212)} Celcius`);