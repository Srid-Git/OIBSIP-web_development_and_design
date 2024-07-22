function checkFunction()
{
    var x = document.getElementById("pass");

    if(x.type === 'password')
        x.type = 'text';
    else
        x.type = "password";
}

function validate()
{
    var password = document.getElementById("pass");
    var length = document.getElementById("length");
    var email = document.getElementById("email");

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
    {
        if(password.value == "root123")
            {
                alert("login successful");
                window.location.replace("home.html");
                return false;
            }
            else
            {
                alert("login falied");
            }
    }
    else
    {   alert("invalid Email address format")
        return false;
    }


    
}