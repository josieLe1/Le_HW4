const rand = Math.floor((Math.random()*100)+1);


input = Number(prompt('Please guess the number generated by the system'));
let i=1;
if (input === rand) {
  alert(`Correct! It took you ${i} attempts to guess the correct number`)
}
while (input !== rand) {
  if (input >= rand+20) {
    input = Number(prompt('Too high. Guess again'));
  }
  if (input <= rand-20) {
    input = Number(prompt('Too low. Guess again'));
  }
  if (((input>rand) && (input<rand+20)) || ((input<rand) && (input>rand-20))) {
    input = Number(prompt("It's close. Guess again"));
  }
  i++;
  if (input === rand) {
    alert(`Correct! It took you ${i} attempts to guess the correct number`)
  }
}