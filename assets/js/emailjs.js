/* ---- emailjs config ---- */
function sendEmail() {
    emailjs.sendForm("service_lsnrkzb", "template_parabim", "#contact-form");
    alert('Email sent successfully!');
}

document.getElementById("contact-form-button").addEventListener("click", function (event) {
    sendEmail(); // Call the sendEmail function when the button is clicked
});

