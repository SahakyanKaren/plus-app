const firstInput = document.getElementById("input");
const secondInput = document.getElementById("input2");
const output = document.getElementById("output");
let number = 0;


const plusValues = () => {
    number = +secondInput.value + +firstInput.value;
    displayValue()
}


const displayValue = () => {
    let outputText = document.createTextNode(number);
    output.appendChild(outputText);
}

