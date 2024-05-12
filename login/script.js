


function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var pass=document.getElementById("password");
    var em=document.getElementById("email");
    var errorMessage = document.getElementById("error-msg");

   
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailRegex)) {

        em.style.border="2px solid red";
        pass.style.border="";

        return false;
    }

   
    if (password.length < 8) {
        em.style.border="";
        pass.style.border="2px solid red";
        
        return false;
    }

    
    errorMessage.innerHTML = "";

    
    return true;
}