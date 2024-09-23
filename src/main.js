const textarea = document.getElementById('write-box');
const prime_factor_panel = document.getElementById("prime-factor-panel")

textarea.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();  
        const input = textarea.value;
        if (isInteger(input)) {
            number = parseInt(input)
            update_prime_factor_text(number)
        }
    }
});

function update_prime_factor_text(number) {
    text = "Prime Factors: " + to_string_prime_factors(get_prime_factors(number));
    prime_factor_panel.innerHTML = text;
}

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
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            factors.push(i);
        }
    }
    return factors;
}
