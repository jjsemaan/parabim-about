/* ---- emailjs config ---- */
function sendEmail() {
    emailjs.sendForm("service_lsnrkzb", "template_parabim", "#contact-form")
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            // Optionally, you can add code here to handle success, like displaying a success message
        }, function (error) {
            console.log('FAILED...', error);
            // Optionally, you can add code here to handle failures, like displaying an error message
        });
}

document.getElementById("contact-form-button").addEventListener("click", function (event) {
    sendEmail(); // Call the sendEmail function when the button is clicked
});
