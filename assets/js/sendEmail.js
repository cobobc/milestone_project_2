function sendMail(contactForm) {
    emailjs.send("service_adi67g3","template_98m6gvh", {
        "to_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "user_score": contactForm.text.value,
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}