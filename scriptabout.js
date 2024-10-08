
        document.addEventListener("DOMContentLoaded", function() {
            const cards = document.querySelectorAll('.zigzag-card-about');
            cards.forEach(card => {
                card.classList.add('card-animate'); // Add the animation class to each card
            });
        });



        // Client-side validation
function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name === "") {
        alert("Please enter your name.");
        return false;
    }
    if (email === "") {
        alert("Please enter your email.");
        return false;
    }
    if (message === "") {
        alert("Please enter your message.");
        return false;
    }

    // If all fields are filled, allow form submission
    return true;
}

function sendWhatsAppMessage() {
    // Inform the user about WhatsApp Web
    var confirmation = confirm("You will be redirected to WhatsApp Web. Please make sure you are logged in. If you haven't connected WhatsApp Web, please do so and try again.");

    // If the user cancels, stop the function
    if (!confirmation) {
        return false;
    }

    // Get the values from the form
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Create a WhatsApp message string
    var whatsappMessage = `Name: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0AMessage: ${encodeURIComponent(message)}`;

    // Open WhatsApp with the message
    var whatsappLink = `https://api.whatsapp.com/send?phone=96877443018&text=${whatsappMessage}`;
    window.open(whatsappLink, '_blank');

    // Prevent form submission
    return false;
}
