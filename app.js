//EX1
const maxOfTwoNumbers = (x, y) => (x >= y ? x : y);
console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));
//EX2
const isAdult = (age) => {
  if (age >= 18) {
    return 'Adult';
  } else {
    return 'Minor';
  }
}
console.log('Exercise 2 Result:', isAdult(21));
//EX3
const isCharAVowel = (char) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return vowels.includes(char.toLowerCase());
}

console.log('Exercise 3 Result:', isCharAVowel("a"));
//EX4
const generateEmail = (name, domain) => {
  return `${name}@${domain}`;
}

console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));
//EX5
const greetUser = (name, timeOfDay) => {
  return `Good ${timeOfDay}, ${name}!`;
}

console.log('Exercise 5 Result:', greetUser("Sam", "morning"));
//EX6
const maxOfThree = (a, b, c) => {
  return Math.max(a, b, c);
}

console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));
//EX7
const calculateTip = (billAmount, tipPercent) => {
  return (billAmount * tipPercent) / 100;
}

console.log('Exercise 7 Result:', calculateTip(50, 20));
//EX8
const convertTemperature = (temp, scale) => {
  if (scale === 'C') {
    return (temp * 9/5) + 32; // من Celsius إلى Fahrenheit
  } else if (scale === 'F') {
    return (temp - 32) * 5/9; // من Fahrenheit إلى Celsius
  } else {
    return 'Invalid scale';
  }
}

console.log('Exercise 8 Result:', convertTemperature(32, "C"));
//EX9
const basicCalculator = (num1, num2, operation) => {
  switch (operation) {
    case 'add':
      return num1 + num2;
    case 'subtract':
      return num1 - num2;
    case 'multiply':
      return num1 * num2;
    case 'divide':
      return num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
    default:
      return 'Invalid operation';
  }
}

console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));
//EX10
function calculateGrade(score) {
  if (score >= 90 && score <= 100) {
    return 'A';
  } else if (score >= 80 && score < 90) {
    return 'B';
  } else if (score >= 70 && score < 80) {
    return 'C';
  } else if (score >= 60 && score < 70) {
    return 'D';
  } else if (score >= 0 && score < 60) {
    return 'F';
  } else {
    return `Invalid score: ${score}`;
  }
}

console.log('Exercise 10 Result:', calculateGrade(85)); 
//EX11
const createUsername = (firstName, lastName) => {
  const firstPart = firstName.slice(0, 3);
  const lastPart = lastName.slice(0, 3);
  const totalLength = firstName.length + lastName.length;
  return `${firstPart}${lastPart}${totalLength}`;
}

console.log('Exercise 11 Result:', createUsername("Samantha", "Green")); 
//EX12
const numArgs = (...args) => {
  return args.length;
}

console.log('Exercise 12 Result:', numArgs(1, 2, 3, 4)); 