function validateForm() {

    let name = document.forms["admissionForm"]["name"].value;
    let email = document.forms["admissionForm"]["email"].value;
    let phone = document.forms["admissionForm"]["phone"].value;
    let agree = document.forms["admissionForm"]["agree"].checked;

    if (name == "") {
        alert("Name must be filled out");
        return false;
    }

    if (phone.length != 10) {
        alert("Phone number must be 10 digits");
        return false;
    }

    if (!agree) {
        alert("Please accept the declaration");
        return false;
    }

    alert("Application submitted successfully!");
    return true;
}
