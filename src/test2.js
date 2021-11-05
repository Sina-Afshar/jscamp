console.log("--------- TASK 1: PRIME NUMBERS ---------")
function findPrime() {
  let number;
  number = 1231;
  let remainder;
  remainder = number % 2;

  let isPrime = new Boolean(true);
  if (number === 1) {
    console.log(number + " : Sayi asal degildir");
    return
  }
  
  if (number < 1) {
    console.log("Sayi gecersizdir, lutfen '0' dan buyuk rakam giriniz");
    return
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      isPrime = false;
    }
  }

  if (isPrime) {
    console.log(number + " : is a prime number");
  } else {
    console.log(number + " : is not a prime number");
  }
}

findPrime()


console.log("--------- TASK 2: FRIEND NUMBERS ---------")

function isFriend(a,b) {
  let sumA = 0;
  let sumB = 0;
  for (let i = 1; i < a; i++) {
    if (a % i === 0) {
      sumA += i;
    }
    
  }

  for (let j = 1; j < b; j++) {
    if (b % j === 0) {
      sumB += j;
    }
    
  }

  if (sumA === b && sumB ===a) {
    console.log(`${a} and ${b} are friend numbers`);
  } else{
    console.log(`${a} and ${b} are not friend numbers`);
  }

    //Ilk 10 arkadas sayi çifti (220, 284), (1184, 1210), (2620, 2924), 
		//(5020, 5564), (6232, 6368), (10744, 10856), (12285, 14595), 
		//(17296, 18416), (63020, 76084), ve (66928, 66992)’dir.

}

isFriend(220, 284);

console.log("--------- TASK 3: PERFECT NUMBERS  ---------")

function perfectNumbers(num) {
  
}