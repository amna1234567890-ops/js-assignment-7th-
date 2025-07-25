function power(a, b) {
  return a ** b;
}

power(3, 6);

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

isLeapYear(2024);

function calculateS(a, b, c) {
  return (a + b + c) / 2;
}

function calculateArea(a, b, c) {
  let S = calculateS(a, b, c);
  let area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
  return area;
}

let a = 5;
let b = 6;
let c = 7;

let result = calculateArea(a, b, c);
alert("the area of treangel is : " + result);


let one = +prompt("Enter your marks in English:");
let two = +prompt("Enter your marks in Math:");
let three = +prompt("Enter your marks in Science:");

function calculateAverage(marksOne, marksTwo, marksThree) {
  let total = marksOne + marksTwo + marksThree;
  let average = total / 3;
  return average;
}

let result2 = calculateAverage(one, two, three);
console.log("Average Marks: " + result2.toFixed(2));


function customIndexOf(text, char) {
  for (let i = 0; i < text.length; i++) {
    if (text[i] === char) {
      return i;
    }
  }
  return -1;
}

console.log(customIndexOf("karla", "l"));

function removeVowels(sentence) {
  let result = "";
  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i].toLowerCase();
    if (char !== 'a' && char !== 'e' && char !== 'i' && char !== 'o' && char !== 'u') {
      result += sentence[i];
    }
  }
  return result;
}

console.log(removeVowels("she is coding JavaScript"));


function countDoubleVowels(text) {
  let count = 0;
  text = text.toLowerCase();

  for (let i = 0; i < text.length - 1; i++) {
    let current = text[i];
    let next = text[i + 1];

    if (isVowel(current) && isVowel(next)) {
      count++;
    }
  }

  return count;
}

function isVowel(char) {
  return "aeiou".includes(char);
}

console.log(countDoubleVowels("Pleases read this application and give me gratuity Such occurrences are ea ea, ui."));


let distanceKm = +prompt("write down a distance between two places in kilometers:");

function convartToM(km) {
  return km * 1000;
}

function convartToM(km) {
  return km * 3280.84;
}

function convartToM(km) {
  return km * 39370.1;
}

function convartToM(km) {
  return km * 100000;
}

function mainWorker() {
  console.log("Distance in Meters:" + convertToMeters(km).toFixed(2))
  console.log("Distance in Feet: " + convertToFeet(km).toFixed(2))
  console.log("Distance in Inches: " + convertToInches(km).toFixed(2))
  console.log("Distance in Centimeters: " + convertToCentimeters(km).toFixed(2))
}

mainWorker(distanceKm);


let hours = +prompt("How many hours you worked?");
let count = 0;

if (hours > 40) {
  for (let i = 41; i <= hours; i++) {
    count++;
  }
  console.log("You worked overtime. Pay: Rs. " + (count * 12));
} else {
  console.log("You didn't work overtime.");
}


let amount = +prompt("Enter amount to withdraw (in rupees):");

if (amount % 10 !== 0) {
  alert("Invalid amount! Please enter amount in multiples of 10.");
} else {
  let note100 = Math.floor(amount / 100);
  amount %= 100;

  let note50 = Math.floor(amount / 50);
  amount %= 50;

  let note10 = Math.floor(amount / 10);

  alert("100 " + note100 + "x\n50 " + note50 + "x\n10 " + note10 + "x");
}
