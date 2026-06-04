// DISPLAY

let screen = document.getElementById("screen");


// ALL BUTTONS

let buttons = document.querySelectorAll("button");


// STORE EXPRESSION

let expression = "";



// LOOP ON BUTTONS

buttons.forEach(function(button){

    button.addEventListener("click", function(){

        let value = button.innerText;



        // AC BUTTON

        if(value === "AC"){

            expression = "";

            screen.value = "";

        }

        // BACKSPACE BUTTON


        else if(value === "c" || value === "C"){

            expression = expression.slice(0,-1);

            screen.value = expression;

        }



 
        // EQUAL BUTTON

        else if(value === "="){

            try{

                expression = eval(expression);

                screen.value = expression;

            }

            catch{

                screen.value = "Error";

            }

        }



        // SQRT BUTTON

        else if(value === "sqrt"){

            try{

                expression = Math.sqrt(eval(expression));

                screen.value = expression;

            }

            catch{

                screen.value = "Error";

            }

        }



        // PERCENT BUTTON

        else if(value === "%"){

            try{

                expression = eval(expression) / 100;

                screen.value = expression;

            }

            catch{

                screen.value = "Error";

            }

        }



        // NORMAL BUTTONS

        else{

            expression += value;

            screen.value = expression;

        }

    });

});