// Function to check if a number is a prime number
function isPrime(num) {
    if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // If divisible by any number other than 1 and itself
    }
    return true; // Number is prime
}
console.log(`${number} is prime: ${isPrime(number)}`);// filepath: c:\learning\pfile_fe_mar25\prime.js

const numInput = document.getElementById('num');
const result = document.getElementById('result');

function isPrime(num) {
    if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // If divisible by any number other than 1 and itself
    }
    return true; // Number is prime
}

document.querySelector('button').addEventListener('click', () => {
    const inputNum = parseInt(numInput.value, 10);

    if (isNaN(inputNum)) {
        result.textContent = "Please enter a valid number.";
        result.style.color = "red";
    } else {
        const primeCheck = isPrime(inputNum);
        result.textContent = `${inputNum} is ${primeCheck ? "a prime number" : "not a prime number"}.`;
        result.style.color = "black";
    }
});