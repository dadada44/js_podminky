function Control(){
    const password = document.getElementById("password");
    const password_control = document.getElementById("control_password");

    //console.log(password.value);

    //console.log("Password = ", password, "Password_control = ", password_control)

    if (password.value == password_control.value){
        console.log("Login is true")
        document.getElementById("output").innerHTML = "Login is true";
    }
    else{
        console.log("Login is false")
        document.getElementById("output").innerHTML = "Login is false";
    }
}


