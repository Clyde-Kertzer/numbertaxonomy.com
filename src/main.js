const textarea = document.getElementById('write-box');
const prime_factor_panel = document.getElementById("prime-factor-panel")
const parity_panel = document.getElementById("parity-panel")
const prime_factor_sum_panel = document.getElementById("prime-factor-sum-panel")
const evt_handler = new EventHandler();
const num_engine = new NumberEngine();


function update_number_property_panels(number) {
    update_prime_factor_panel(number);
    update_parity_panel(number)
}

function update_prime_factor_panel(number) {
    text = "Prime Factors: " + lst_string(num_engine.get_prime_factors(number));
    prime_factor_panel.innerHTML = text;

    text = "Prime factor sum: " + (num_engine.sum_faactors(number)).toString()
    prime_factor_sum_panel.innerHTML = text
}

function update_parity_panel(number) {
    text = "Parity: " + num_engine.get_parity(number)
    parity_panel.innerHTML = text;
}
