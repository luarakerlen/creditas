let currentValue = 0;
let newValue = 0;
let operation = null;
let keyPressed = null;

let buttonOperationWasPressed = false;
let buttonEqualWasPressed = false;
let isANewNumber = false;

//Funções de clique nos botões
function buttonReset() {
  currentValue = 0;
  newValue = 0;
  operation = null;
  keyPressed = null;
  document.getElementById("display").innerHTML = "0";

  buttonOperationWasPressed = false;
  buttonEqualWasPressed = false;
  isANewNumber = false;
}

function buttonNumber(button) {
  const number = setNumber(button);

  //Reinicia as variáveis caso o igual tenha sido pressionado, para iniciar outra operação
  if (buttonEqualWasPressed) {
    buttonReset();
  }

  //Caso seja o primeiro número, apagar o 0 do display, a não ser que seja um "."
  if (isTheFirstNumber() && number !== ".") {
    clearDisplay();
  }

  //Só permite que seja acrescentado 1 ponto por entrada no display
  if (isSecondPoint(number)) {
    return;
  }

  showNumberAtDisplay(number);
}

function buttonOperation(button) {
  buttonOperationWasPressed = true;
  buttonEqualWasPressed = false;

  if (isANewNumber) {
    newValue = captureValueFromDisplay();
    doOperation();
    setOperation(button);
    isANewNumber = false;
  } else {
    setOperation(button);
    currentValue = captureValueFromDisplay();
  }
}

function buttonEqual() {
  isANewNumber = false;
  buttonOperationWasPressed = true;

  //Caso ainda não tenha nenhum número no display antes, o número atual se manterá
  if (!hasCurrentOperation()) {
    return;
  }

  //Apenas pega um novo valor caso tenha sido escolhida uma operação.
  //Caso o botão de igual esteja sendo apertado seguidamente,
  //os valores de currentValue e newValue se mantém e a última operação continua sendo realizada
  if (buttonEqualWasPressed) {
    doOperation();
  } else {
    newValue = captureValueFromDisplay();
    doOperation();
    buttonEqualWasPressed = true;
  }
}

//Funções auxiliares
function clearDisplay() {
  document.getElementById("display").innerHTML = "";
}

function captureValueFromDisplay() {
  let valueOnScreen = document.getElementById("display").textContent;
  if (valueOnScreen !== "") {
    valueOnScreen = parseFloat(valueOnScreen);
  } else {
    valueOnScreen = 0;
  }

  return valueOnScreen;
}

function setNumber(button) {
  if (keyPressed === null) {
    number = button.value;
  } else {
    number = button;
    keyPressed = null;
  }
  return number;
}

function setOperation(button) {
  if (keyPressed === null) {
    operation = button.value;
  } else {
    setKeyOperation(button);
    keyPressed = null;
  }
}

function showNumberAtDisplay(number) {
  //Decide se deve acrescentar o número ao que já existe no display ou substituí-lo
  if (buttonOperationWasPressed) {
    document.getElementById("display").innerHTML = number;
    isANewNumber = true;
    buttonOperationWasPressed = false;
  } else {
    document.getElementById("display").innerHTML += number;
  }
}

function isTheFirstNumber() {
  let numberAtDisplay = document.getElementById("display").innerHTML;
  if (numberAtDisplay === "0") {
    return true;
  }
  return false;
}

function isSecondPoint(number) {
  let valueOnScreen = document.getElementById("display").textContent.split("");

  if (buttonOperationWasPressed) {
    return false;
  }
  if (number === "." && valueOnScreen.includes(".")) {
    return true;
  }
  return false;
}

function hasCurrentOperation() {
  if (operation === null) {
    return false;
  }
  return true;
}

function doOperation() {
  switch (operation) {
    case "sum":
      currentValue += newValue;
      break;

    case "sub":
      currentValue -= newValue;
      break;

    case "mul":
      currentValue *= newValue;
      break;

    case "div":
      currentValue /= newValue;
      break;
  }

  document.getElementById("display").innerHTML = currentValue;
}

// Funções para utilizar o teclado
document.onkeypress = function (e) {
  keyPressed = e.key;

  if (isUsefulButNaN(keyPressed)) {
    return;
  }

  keyPressed = parseFloat(keyPressed);
  if (Number.isNaN(keyPressed)) {
    return;
  }

  buttonNumber(keyPressed);
};

function isUsefulButNaN(key) {
  if (key === "+" || key === "-" || key === "*" || key === "/") {
    buttonOperation(keyPressed);
    return true;
  }

  if (key === "=" || key === "Enter") {
    buttonEqual();
    return true;
  }

  if (key === "." || key === ",") {
    keyPressed = ".";
    buttonNumber(keyPressed);
    return true;
  }

  if (key === "c" || key === "C") {
    buttonReset();
    return true;
  }

  return false;
}

function setKeyOperation(key) {
  switch (key) {
    case "+":
      operation = "sum";
      break;

    case "-":
      operation = "sub";
      break;

    case "*":
      operation = "mul";
      break;

    case "/":
      operation = "div";
      break;

    default:
      break;
  }
}
