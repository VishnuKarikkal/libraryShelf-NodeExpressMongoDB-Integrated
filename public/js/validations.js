            //sign-up validation
function validateSignUp()
{
    //regular expressions
            // example123@ghhd.abc.ilk
let regExEmail = /^([\w\.\-]+)@([\w\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/
            // only letters (no space nor special chars)
let regExName = /^([a-zA-Z])+$/
            // let regLastname = /^[a-zA-Z\s]$/
            //(house),(postoffice),(place),(district),(pin) - no white space allowed
let regExAddress = /(?!.*\s)([\w]{4,}),([\w]{4,}),([\w]{4,}),([\w]{4,}),([\d]{6})$/
        //xxx-xxx-xxxx or xxx.xxx.xxxx or xxx xxx xxxx  ->phone number formats
let regExPhoneNum = /^((\d{3})\s(\d{3})\s(\d{4}))|((\d{3})\.(\d{3})\.(\d{4}))|((\d{3})\-(\d{3})\-(\d{4}))$/
            // to check whether any element's validation test failed or not
            // flags are initially set to 'true'
let validateFlag = true;

let textElement = document.getElementById("firstNameText");
                            // first-name validation
if(regExName.test(textElement.value))
{
        document.getElementById("firstNameHelp").textContent = "looks good!";
        document.getElementById("firstNameHelp").classList.remove('wrong');
        document.getElementById("firstNameHelp").classList.add('good');
}
else
{
        document.getElementById("firstNameHelp").textContent = "invalid!";
        document.getElementById("firstNameHelp").classList.remove('good');
        document.getElementById("firstNameHelp").classList.add('wrong');
        validateFlag = false;
}
        
textElement = document.getElementById("lastNameText");
                            // last-name validation
if(regExName.test(textElement.value))
{
        document.getElementById("lastNameHelp").textContent = "looks good!";
        document.getElementById("lastNameHelp").classList.remove('wrong');
        document.getElementById("lastNameHelp").classList.add('good');
}
else
{
        document.getElementById("lastNameHelp").textContent = "invalid!";
        document.getElementById("lastNameHelp").classList.remove('good');
        document.getElementById("lastNameHelp").classList.add('wrong');
        validateFlag = false;
}

                // textElement = document.getElementById("passwordText");
                //                         // password validation
                // if(regExPassword.test(textElement.value))
                // {
                //     document.getElementById("passwordHelp").textContent = "looks good!";
                //     document.getElementById("passwordHelp").classList.remove('wrong');
                //     document.getElementById("passwordHelp").classList.remove('text-warning');
                //     document.getElementById("passwordHelp").classList.add('good');
                // }
                // else
                // {
                //    
                // }

textElement = document.getElementById("phoneText");
                        // phone number validation
if(regExPhoneNum.test(textElement.value))
{
     document.getElementById("phoneHelp").textContent = "looks good!";
     document.getElementById("phoneHelp").classList.remove('wrong');
     document.getElementById("phoneHelp").classList.add('good');
}
else
{
    document.getElementById("phoneHelp").textContent = "invalid!";
    document.getElementById("phoneHelp").classList.remove('good');
    document.getElementById("phoneHelp").classList.add('wrong');
    validateFlag = false;
}

textElement = document.getElementById("addressText");
document.getElementById("addressText").value=textElement.value.trim();
                        // address validation
if(regExAddress.test(textElement.value))
{
     document.getElementById("addressHelp").textContent = "looks good!";
     document.getElementById("addressHelp").classList.remove('wrong');
     document.getElementById("addressHelp").classList.add('good');
}
else
{
    document.getElementById("addressHelp").textContent = "invalid!";
    document.getElementById("addressHelp").classList.remove('good');
    document.getElementById("addressHelp").classList.add('wrong');
    validateFlag = false;
}

textElement = document.getElementById("emailText");
                        // email validation
if(regExEmail.test(textElement.value))
{
     document.getElementById("emailHelp").textContent = "looks good!";
     document.getElementById("emailHelp").classList.remove('wrong');
     document.getElementById("emailHelp").classList.add('good');
}
else
{
    document.getElementById("emailHelp").textContent = "invalid!";
    document.getElementById("emailHelp").classList.remove('good');
    document.getElementById("emailHelp").classList.add('wrong');
    validateFlag = false;
}

let radioMale = document.getElementById("radioMale");
let radioFemale = document.getElementById("radioFemale");
let radioOther = document.getElementById("radioOther");
                        // whether selected gender
if((radioMale.checked)||(radioFemale.checked)||(radioOther.checked))
{
    document.getElementById("genderHelp").textContent = "hmm..thats Ok!";
    document.getElementById("genderHelp").classList.remove('wrong');
    document.getElementById("genderHelp").classList.add('good');
}
else
{
    document.getElementById("genderHelp").textContent = "please select";
    document.getElementById("genderHelp").classList.remove('good');
    document.getElementById("genderHelp").classList.add('wrong');
    validateFlag = false;
}

textElement=document.getElementById('dateOfBirth');
if(textElement.value=="")
{
    document.getElementById("dateHelp").textContent = "please select date of birth";
    document.getElementById("dateHelp").classList.remove('good');
    document.getElementById("dateHelp").classList.add('wrong');
    validateFlag=false;
}
else
{
    if((textElement.value > "2005-12-31")||(textElement.value < "1940-01-01"))
    {
        document.getElementById("dateHelp").textContent = "invalid date of birth";
        document.getElementById("dateHelp").classList.remove('good');
        document.getElementById("dateHelp").classList.add('wrong');
        validateFlag = false;
    }
    else
    {
        document.getElementById("dateHelp").textContent = "hmm..thats Ok!";
        document.getElementById("dateHelp").classList.remove('wrong');
        document.getElementById("dateHelp").classList.add('good');
    }   
}
//if the validateFlag is showing true or not: true means everything is valid
if(validateFlag==true)
{
    document.getElementById('dateOfBirth').readonly=true;
    document.getElementById("radioMale").readonly=true;
    document.getElementById("radioFemale").readonly=true;
    document.getElementById("radioOther").readonly=true;
    document.getElementById("emailText").readonly=true;
    document.getElementById("addressText").readonly=true;
    document.getElementById("phoneText").readonly=true;
    document.getElementById("lastNameText").readonly=true;
    document.getElementById("firstNameText").readonly=true;

    document.getElementById('passwordDiv').classList.remove('hideDiv');
    document.getElementById('passwordText').scrollIntoView({ behavior: 'smooth' });
    document.getElementById('passwordText').focus();
    document.getElementById('forwardDiv').classList.add('hideDiv');
    document.getElementById('loginDiv').classList.remove('hideDiv');
}

}

            // to check the strength of password entered
document.getElementById("passwordText").addEventListener('input',passwordStrengthChecker);
function passwordStrengthChecker()
{
//atleast 8 chars, atleast-1 lower case, 1 upper case, 1 number, 1 among[!@#$%&*] and no blank spaces
let regExPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*])(?=.*[0-9])(?!.*\s).{8,}$/
let passWord = document.getElementById("passwordText");
let passwordStrength="";
        document.getElementById('passwordText').style.backgroundColor="white";
        document.getElementById("passwordHelp").textContent="";
    if((passWord.value.trim()==""))
    {
        document.getElementById("passwordHelp").textContent="no white space is allowed";
        document.getElementById("passwordHelp").classList.remove('good');
        document.getElementById("passwordHelp").classList.remove('text-warning');
        document.getElementById("passwordHelp").classList.add('wrong');
        document.getElementById('passwordText').style.backgroundColor='white';
    }
    else
    {
        let numberCount=0;        //number count to count the number of numbers in the input
        let speclCharCount=0;     //to count the number of specl char.s in the input 
        let spclChars=['!','@','#','$','%','&','*'];    //spcl. char.s array                              
            if(regExPassword.test(passWord.value))
            { 
                document.getElementById("passwordHelp").classList.remove('wrong');
                document.getElementById("passwordHelp").classList.remove('text-warning');
                document.getElementById("passwordHelp").classList.add('good');
                            //          --- if contains atleast 3 num:
                            //          --- if contains atleat 2 special chars: 
                passwordStrength='Strength:Good ✌';
                document.getElementById('passwordText').style.backgroundColor="#cb9de0";
                            //whether contains 3 numbers
                for(let i=0;i<10;i++)
                {
                    if(passWord.value.includes(i))
                    {
                    numberCount++;
                    }
                    if(numberCount==3)
                    {
                            //3 numbers found
                    break;     //exit out
                    }
                }
                            // whether conatains 2 specl char.s
                for(let i=0;i<7;i++)
                {
                    if(passWord.value.includes(spclChars[i]))
                    {
                    speclCharCount++;
                    }
                    if(speclCharCount==2)
                    {
                            //2 special char.s found
                    break;     //exit out
                    }
                    
                }
                if((numberCount==3)&&(speclCharCount==2))
                {
                    passwordStrength='Strong Password 💪';
                    document.getElementById('passwordText').style.backgroundColor="#4eed39";
                }
                else
                {
                    if(numberCount==3)
                    {
                        passwordStrength='Strength:Better 😃';
                        document.getElementById('passwordText').style.backgroundColor="#b9f054";
                    }
                    if(speclCharCount==2)
                    {
                        passwordStrength='Strength:Better 😃';
                        document.getElementById('passwordText').style.backgroundColor="#b9f054";
                    }
                }            //assigning password strength
                    document.getElementById("passwordHelp").textContent=passwordStrength; 
            }
    }
}

function checkPassword()
{
    //atleast 8 chars, atleast-1 lower case, 1 upper case, 1 number, 1 among[!@#$%&*] and no blank spaces
    let regExPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*])(?=.*[0-9])(?!.*\s).{8,}$/
    let validateFlag = true;
    let passWord = document.getElementById("passwordText");
    let confirmPassword=document.getElementById('confirmPasswordText');
    let passwordStrength;
    if((passWord.value.trim()=="")||(passWord.value.trim().length<8))
    {
        document.getElementById("passwordHelp").textContent = "invalid!";
        document.getElementById("passwordHelp").classList.remove('good');
        document.getElementById("passwordHelp").classList.remove('text-warning');
        document.getElementById("passwordHelp").classList.add('wrong');
        validateFlag = false;
    }
    else
    {
                                           
    let numberCount=0;        //number count to count the number of numbers in the input
    let speclCharCount=0;     //to count the number of specl char.s in the input 
    let spclChars=['!','@','#','$','%','&','*'];    //spcl. char.s array                              
        if(regExPassword.test(passWord.value))
        {                                         // password test
                  if((passWord.value==confirmPassword.value)&&(regExPassword.test(confirmPassword.value)))
                    {               //confirm password test
                        document.getElementById("confirmPasswordHelp").textContent = "looks good!";
                        document.getElementById("confirmPasswordHelp").classList.remove('wrong');
                        document.getElementById("confirmPasswordHelp").classList.remove('text-warning');
                        document.getElementById("confirmPasswordHelp").classList.add('good');
                    }
                    else
                    {
                        document.getElementById("confirmPasswordHelp").textContent = "incorrect!";
                        document.getElementById("confirmPasswordHelp").classList.remove('good');
                        document.getElementById("confirmPasswordHelp").classList.remove('text-warning');
                        document.getElementById("confirmPasswordHelp").classList.add('wrong');
                        validateFlag=false;
                    }
            
                  //             --- if contains atleast 3 num:
                  //             --- if contains atleat 2 special chars: 
            passwordStrength='Strength:Good ✌';
                    //whether contains 3 numbers
            for(let i=0;i<10;i++)
            {
                if(passWord.value.includes(i))
                {
                numberCount++;
                }
                if(numberCount==3)
                {
                    //3 numbers found
                break;     //exit out
                }
            }
                    // whether conatains 2 specl char.s
            for(let i=0;i<7;i++)
            {
                if(passWord.value.includes(spclChars[i]))
                {
                speclCharCount++;
                }
                if(speclCharCount==2)
                {
                    //2 special char.s found
                break;     //exit out
                }
                
            }
            if((numberCount==3)&&(speclCharCount==2))
            {
                passwordStrength='Strong Password 💪';
            }
            else
            {
                if(numberCount==3)
                {
                    passwordStrength='Strength:Better 😃';
                }
                if(speclCharCount==2)
                {
                    passwordStrength='Strength:Better 😃';
                }
            }
            document.getElementById("passwordHelp").textContent=passwordStrength; //assigning password strength
        }
        else
        {           
            document.getElementById("passwordHelp").textContent = "invalid!";
            document.getElementById("passwordHelp").classList.remove('good');
            document.getElementById("passwordHelp").classList.remove('text-warning');
            document.getElementById("passwordHelp").classList.add('wrong');
            validateFlag = false;
        }
    
    }
    return validateFlag;
}

function cancelSignupSubmit()
{
    document.getElementById('dateOfBirth').disabled=false;
    document.getElementById("radioMale").disabled=false;
    document.getElementById("radioFemale").disabled=false;
    document.getElementById("radioOther").disabled=false;
    document.getElementById("emailText").disabled=false;
    document.getElementById("addressText").disabled=false;
    document.getElementById("phoneText").disabled=false;
    document.getElementById("lastNameText").disabled=false;
    document.getElementById("firstNameText").disabled=false;

    document.getElementById('passwordDiv').classList.add('hideDiv');
    //document.getElementById('passwordText').scrollIntoView({ behavior: 'smooth' });
    //document.getElementById('passwordText').focus();
    document.getElementById('forwardDiv').classList.remove('hideDiv');
    document.getElementById('loginDiv').classList.add('hideDiv');
}