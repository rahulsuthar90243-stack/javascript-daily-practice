// Program to check whether a number is Prime or Not

function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

let number = 29;

if (isPrime(number)) {
  console.log(number + " is a Prime number");
} else {
  console.log(number + " is not a Prime number");
}