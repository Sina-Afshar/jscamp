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
    console.log(number + " : Sayi asaldir");
  } else {
    console.log(number + " : Sayi asal degildir");
  }
}

findPrime()


console.log("--------- TASK 2: AMICABLE NUMBERS ---------")

console.log("--------- TASK 3: PERFECT NUMBERS  ---------")