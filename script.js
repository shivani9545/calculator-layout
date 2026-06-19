let screen = document.getElementById("screen");

let buttons = document.querySelectorAll("button");

let expression = "";
let resultShown = false;

buttons.forEach(function (button) {

    button.addEventListener("click", function () {

        let value = button.innerText;

        if (value === "AC") {

            expression = "";
            resultShown = false;
            screen.value = "";
        }

        else if (value === "Back") {

            if (resultShown) {
                return;
            }

            expression = expression.slice(0, -1);
            screen.value = expression;
        }

        else if (value === "=") {

            if (expression === "") {
                return;
            }

            let total = eval(expression);

            if (!isFinite(total)) {

                screen.value = "Error";
                expression = "";
                return;
            }

            screen.value = total;
            expression = total.toString();
            resultShown = true;
        }

        else if (value === "sqrt") {

            if (expression === "") {
                return;
            }

            let total = Math.sqrt(eval(expression));

            if (!isFinite(total)) {

                screen.value = "Error";
                expression = "";
                return;
            }

            screen.value = total;
            expression = total.toString();
            resultShown = true;
        }

        else if (value === "%") {

            if (expression === "") {
                return;
            }

            let total = eval(expression) / 100;

            screen.value = total;
            expression = total.toString();
            resultShown = true;
        }

        else {

            if (resultShown) {

                if (
                    value !== "+" &&
                    value !== "-" &&
                    value !== "*" &&
                    value !== "/"
                ) {

                    expression = "";
                    screen.value = "";
                }

                resultShown = false;
            }

            if (
                expression === "" &&
                (
                    value === "+" ||
                    value === "*" ||
                    value === "/"
                )
            ) {
                return;
            }

            let lastChar = expression[expression.length - 1];

            if (
                (value === "+" ||
                 value === "-" ||
                 value === "*" ||
                 value === "/")
                &&
                (lastChar === "+" ||
                 lastChar === "-" ||
                 lastChar === "*" ||
                 lastChar === "/")
            ) {
                return;
            }

            if (value === ".") {

                let parts = expression.split(/[\+\-\*\/]/);

                let currentNumber = parts[parts.length - 1];

                if (currentNumber.includes(".")) {
                    return;
                }
            }

            expression += value;
            screen.value = expression;
        }
    });
});