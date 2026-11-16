console.log(“Welcome to Tiny Drop Cleaning Services!”);

// 2. Mobile menu message
function welcomeUser() {
alert(“Welcome to Tiny Drop! Thank you for visiting our website.”);
}


const contactForm = document.getElementById(“contactForm”);

if (contactForm) {
contactForm.addEventListener(“submit”, function(event) {

    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();
    if (name === "" || email === "" || subject === "" || message === "") {
        alert("Please fill in all the required fields.");
        return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    alert("Thank you, " + name + "! Your form has passed validation.");
    contactForm.reset();
});

}