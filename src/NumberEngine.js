class NumberEngine {

    get_prime_factors(num) {
        const factors = [];
        for (let i = 1; i <= Math.floor(Math.sqrt(num)); i++) {
            if (num % i == 0) {
                factors.push(i);
            }
        }
        return factors;
    }

    get_parity(num) { //returns string
        //TODO 
    }
    
}
