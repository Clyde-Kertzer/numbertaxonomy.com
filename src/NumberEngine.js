class NumberEngine {

    get_prime_factors(num) {
        const factors = [];
        for (let i = 1; i <= num/2; i++) {
            if (num % i == 0) {
                factors.push(i);
            }
        }
        return factors;
    }

    sum_factors(num) {
        let sum = 0
        for (let i of get_prime_factors(num) {
            sum += i
        }
        return sum
    }

    get_parity(num) { //returns string
        //TODO 
    }
    
}
