function validateForm() {

    let name = document.forms["admissionForm"]["name"].value.trim();
    let email = document.forms["admissionForm"]["email"].value.trim();
    let phone = document.forms["admissionForm"]["phone"].value.trim();
    let agree = document.forms["admissionForm"]["agree"].checked;

    
    if (name === "") {
        alert("Name must be filled out");
        return false;
    }

    
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === "") {
        alert("Email must be filled out");
        return false;
    }
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address");
        return false;
    }

    
    let phonePattern = /^[0-9]{10}$/;
    if (!phone.match(phonePattern)) {
        alert("Phone number must be exactly 10 digits");
        return false;
    }

    
    if (!agree) {
        alert("Please accept the declaration");
        return false;
    }

    alert("Application submitted successfully!");
    return true;
}

