function sendMail(contactForm) {
    emailjs.send("service_adi67g3","template_98m6gvh", {
        "to_name": contactForm.name.value,
        "to_email": contactForm.email.value,
        "user_score": contactForm.text.value,
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            alert("Your score has been submitted and sent to your email!")
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}