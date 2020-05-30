// Assignment Javascript
// start with setting the variables

var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!@#$%^&*()?";
var generateBtn=document.querySelector("#generateBtn");

// Do While loop, the code will pass on only if while statement is "false" as "true" is incorrect and will keep prompting the user
    do {
    var length = prompt("Please enter your password length 8-128 long");   
    }
    while (8 > length || length > 128);

    var LowerOrnot = confirm("Would you like alphabets?");
    var UpperOrNot = confirm("Would you like Uppercase?");
    var NumbersOrNot = confirm("Would you like Numbers?");
    var SymbolsOrNot = confirm("Would you like Symbols?");
    // addEventListener for click.
    generateBtn.addEventListener("click",function (){
        var password= generatePassword();
        console.log(password);
        var textarea = document.getElementById("password");
        textarea.innerHTML = password;
    });
  // generatePassword function using if statement
    function generatePassword(){
        var allowed = '';
        if(LowerOrnot){
        allowed+= lowercase;
        }
        if(UpperOrNot){
        allowed += uppercase;
        }
        if(NumbersOrNot){
        allowed += numbers;
        }
        if(SymbolsOrNot){
        allowed += symbols;
        }    

        var password = '';
        for(var i = 0; i<length; i++){
            var pwindex= Math.floor(Math.random()*allowed.length);
            password += allowed[pwindex];
        }
        return password; 
        }