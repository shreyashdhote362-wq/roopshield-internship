document
.getElementById("contactForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    validate();

});

function validate(){

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";

    let name =
    document.getElementById("name").value;

    let email =
    document.getElementById("email").value;

    let message =
    document.getElementById("message").value;

    let valid = true;

    if(name.trim() === ""){
        document.getElementById("nameError").textContent =
        "Name is required";
        valid = false;
    }

    if(!email.includes("@")){
        document.getElementById("emailError").textContent =
        "Invalid email address";
        valid = false;
    }

    if(message.trim() === ""){
        document.getElementById("messageError").textContent =
        "Message cannot be blank";
        valid = false;
    }

    if(valid){

        document.getElementById("contactForm").innerHTML =
        "<p>Thanks! Your message was sent.</p>";

    }

}