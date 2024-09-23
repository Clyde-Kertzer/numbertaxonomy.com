class EventHandler {
    constructor() {
        textarea.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();  
                const input = textarea.value;
                if (isInteger(input)) {
                    let number = parseInt(input)
                    update_number_property_panels(number)
                }
            }
        });
    }
}