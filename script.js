/*
function Control(){
    const password = document.getElementById("password");
    const password_control = document.getElementById("control_password");
    const code = document.getElementById("code");

    //console.log(password.value);

    //console.log("Password = ", password, "Password_control = ", password_control)

    if (password.value == password_control.value){

        if (!isNaN(code.value)){
            console.log("Login is true")
            document.getElementById("output").innerHTML = "Login is true";
        }
        else{
            document.getElementById("output").innerHTML = "Login is false";
        }
    }
    else{
        console.log("Login is false")
        document.getElementById("output").innerHTML = "Login is false";
    }
}
*/

function Control(){
    const password = document.getElementById("password");
    const password_control = document.getElementById("control_password");
    const code = document.getElementById("code");
    const nickname = document.getElementById("nickname")


    if ((password.value == password_control.value) && (!isNaN(code.value))){
        if((nickname.value !="") && (password != "") && (password_control != "") && (code != "")){
            console.log("Login is true")
            document.getElementById("output").innerHTML = "Login is true";
        }
        else{
            console.log("Any input is empty")
            document.getElementById("output").innerHTML = "Any input is empty";
        }
    }
    else{
        console.log("Login is false")
        document.getElementById("output").innerHTML = "Login is false";
    }
}


