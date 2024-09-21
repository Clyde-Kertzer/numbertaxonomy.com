const textarea = document.getElementById('write-box');
const prime_factor_panel = document.getElementById("prime-factor-panel")

textarea.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {

        event.preventDefault();  // Prevent default new line behavior
        const input = textarea.value;
        if (isInteger(input)) {
            number = parseInt(input)
            prime_factor_panel.innerHTML += to_string_prime_factors(get_prime_factors(number));
        }
        else {
            console.log("number not an integer");
        }
    }
});

function isInteger(input) {
    // Use trim() to remove any leading/trailing spaces and ensure it's a valid integer
    return /^\d+$/.test(input.trim());
}

function to_string_prime_factors(factors) {
    let res = ""
    for (const factor of factors) {res += (factor.toString() + ", ");}
    return res.substring(0, res.length - 2)
}

function get_prime_factors(num) {
    // const factors = [];
   //  factors.push(9);
    // return factors;
    const primeArray = [];
  let isPrime;

  // Find divisors starting with 2
  for (let i = 2; i <= integer; i++) {
    if (integer % i !== 0) continue;

    // Check if the divisor is a prime number
    for (let j = 2; j <= i / 2; j++) {
      isPrime = i % j !== 0;
    }

    if (!isPrime) continue;
    // if the divisor is prime, divide integer with the number and store it in the array
    integer /= i
    primeArray.push(i);
  }

  return primeArray;
}
