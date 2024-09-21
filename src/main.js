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
    const factors = [];
    for (let i = 0; i <= num; i++) {
        if (n % divisor == 0) {
        factors.push(i);
        }
    }
    return factors;
}
