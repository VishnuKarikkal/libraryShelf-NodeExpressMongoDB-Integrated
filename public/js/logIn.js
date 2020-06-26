            // log-In form validation
function validateLogIn()
{
    let inputEmail = document.getElementById("inputEmail");
    let inputPassword = document.getElementById("inputPassword");
                // example123@ghhd.abc.ilk
    let regExEmail = /^([\w\.\-]+)@([\w\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/
        //atleast 8 chars, atleast-1 lower case, 1 upper case, 1 number, 1 among[!@#$%&*] and no blank spaces
    let regExPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*])(?=.*[0-9])(?!.*\s).{8,}$/
            
    let validateFlag = true;
                                         // validation 'test'
                                         //email test
            if(regExEmail.test(inputEmail.value))
            {                                   //if test passed
                document.getElementById("inputEmailHelp").textContent = "Looks Good";
                document.getElementById("inputEmailHelp").classList.remove('wrong');
                document.getElementById("inputEmailHelp").classList.remove('text-muted');
                document.getElementById("inputEmailHelp").classList.add("good");
            }
            else
            {                                   //if test failed
                document.getElementById("inputEmailHelp").textContent = "Please Enter a Valid Email";
                document.getElementById("inputEmailHelp").classList.remove('text-muted');
                document.getElementById("inputEmailHelp").classList.remove('good');
                document.getElementById("inputEmailHelp").classList.add('wrong');
                validateFlag = false;
            }
                                                    // password test
            if(regExPassword.test(inputPassword.value))
            {
                document.getElementById("inputPasswordHelp").textContent = "Looks Good";
                document.getElementById("inputPasswordHelp").classList.remove("wrong");
                document.getElementById("inputEmailHelp").classList.remove('warning');
                document.getElementById("inputPasswordHelp").classList.add("good");
            }
            else
            {
                document.getElementById("inputPasswordHelp").textContent = "must include atleast 8 characters including lowercase uppercase and any among !@#$%&*";
                document.getElementById("inputPasswordHelp").classList.remove("good");
                document.getElementById("inputEmailHelp").classList.remove('warning');
                document.getElementById("inputPasswordHelp").classList.add("wrong");
                validateFlag = false;
            }           
    return validateFlag;
}