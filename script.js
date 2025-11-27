document.addEventListener("DOMContentLoaded", function() {
    let allInput = document.querySelectorAll('input');

    let errorHolder = {
        "first-name": "First name should be at least 2 symbols long - numbers and most special symbols are not accepted.",
        "last-name": "Last name should be at least 2 symbols long - numbers and most special symbols are not accepted.",
        email: "Please enter a valid email address.",
        phone: "Please enter a valid phone number, any format is acceptable, for example: 123 456 7890.",
        password: "Please enter a valid password - it should be at least 6 digits long, and it needs to contain at least one number, one capital letter, and one lowercase letter.",
        'confirm-password': "Please enter a valid password - it should be at least 6 digits long, and it needs to contain at least one number, one capital letter, and one lowercase letter."
    }

    allInput.forEach((input) => {
        input.oninvalid = function(event) {
            event.target.setCustomValidity(errorHolder[`${event.target.id}`]);
        }

        input.onchange = function(event) {
            event.target.setCustomValidity("");
        }

        input.oninput = function(event) {
            event.target.setCustomValidity("");
        }
    })
})