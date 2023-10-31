function validateForm(){

    // single line comment
    /*

    this is
    a multi-line
    comment

    */

    var errors = "";

    // alert('Validate Function called successfully');

    // Get value of element and storing it in variable
    var fullName = document.getElementById('fullName').value;
    // check if fullName variable is empty
    if(fullName==""){
        //alert('Please enter your full name.');
        // Block action from getting executed
        //return false;
        errors += "<li>Please enter your full name.";
        document.getElementById('fullName').classList.add('inputError');
    }
    else{
        document.getElementById('fullName').classList.remove('inputError');
    }

    var username = document.getElementById('username').value;
    if(username==""){
        //alert('Please enter your username.');
        //return false;
        errors += "<li>Please enter your username.";
        document.getElementById('username').classList.add('inputError');
    }
    else{
        document.getElementById('username').classList.remove('inputError');
    }

    var password = document.getElementById('password').value;
    if(password==""){
        //alert('Please enter your password.');
        //return false;
        errors += "<li>Please enter your password.";
        document.getElementById('password').classList.add('inputError');
    }
    else{
        document.getElementById('password').classList.remove('inputError');
    }

    var nationality = document.getElementById('nationality').value;
    if(nationality=="0"){
        //alert('Please select your nationality.');
        //return false;
        errors += "<li>Please enter your nationality.";
        document.getElementById('nationality').classList.add('inputError');
    }
    else{
        document.getElementById('nationality').classList.remove('inputError');
    }

    if (errors!= ""){
        document.getElementById('errorList').innerHTML = errors;
        return false;
    }


}

function resetForm(){
    document.getElementById('errorList').innerHTML = "";
    document.getElementById('fullName').classList.remove('inputError');
    document.getElementById('username').classList.remove('inputError');
    document.getElementById('password').classList.remove('inputError');
    document.getElementById('nationality').classList.remove('inputError');
}