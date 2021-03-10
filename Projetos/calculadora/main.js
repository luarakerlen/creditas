let buttonOperationPressed = false
let buttonEqualPressed = false
let buttonNumberPressed = false
let pointPressed = false
let firstTime = true
let firstNumber = true
let actualValue = 0
let newValue = 0
let operation = null

const buttonReset = () => { 
    buttonOperationPressed = false
    buttonEqualPressed = false
    buttonNumberPressed = false
    pointPressed = false
    firstTime = true
    firstNumber = true
    actualValue = 0
    newValue = 0
    operation = null
    document.getElementById("display").innerHTML = "0"
}

const buttonNumber = (button) => {
    let number = button.value

    //Reinicia as variáveis caso o igual tenha sido pressionado, para iniciar outra operação
    if(buttonEqualPressed) buttonReset()

    //Caso seja o primeiro número, apagar o 0 do display, a não ser que seja um "."
    if(firstNumber && number !== ".") document.getElementById("display").innerHTML = ""
    firstNumber = false

    //Só permite que seja acrescentado 1 ponto por entrada no display
    if(number === ".") {
        if(pointPressed) return
        else pointPressed = true
    }
    
    //Decide se deve acrescentar o número ao que já existe no display ou substituí-lo
    if(buttonOperationPressed) {
        document.getElementById("display").innerHTML = number
        buttonNumberPressed = true
        buttonOperationPressed = false
    // } else if(firstTime) {
    //     document.getElementById("display").innerHTML = number
    //     firstTime = false
    } else {
        document.getElementById("display").innerHTML += number
    }
}

const buttonOperation = (button) => {
    buttonOperationPressed = true
    buttonEqualPressed = false
    pointPressed = false
    firstTime = false

    if(buttonNumberPressed) {
        //Salva o número para fazer a operação
        newValue = +(document.getElementById("display").textContent)
        doOperation()
        operation = button.value
        buttonNumberPressed = false
    } else {
        //Salva a operação
        operation = button.value

        //Salva o número atual
        actualValue = +(document.getElementById("display").textContent)
    }
}

const buttonEqual = () => {
    buttonNumberPressed = false
    buttonOperationPressed = true
    pointPressed = false
    
    //Caso ainda não tenha nenhum número no display antes, o número atual se manterá
    if(firstTime) {
        let defaultValue = +(document.getElementById("display").textContent)
        document.getElementById("display").innerHTML = defaultValue
        return
    }

    //Apenas pega um novo valor caso tenha sido escolhida uma operação.
    //Caso o botão de igual esteja sendo apertado seguidamente,
    //os valores de actealValue e newValue se mantém e a última operação continua sendo realizada
    if(buttonEqualPressed) {
        doOperation()
    } else {
        newValue = +(document.getElementById("display").textContent)
        doOperation()
        buttonEqualPressed = true
    }
}

const doOperation = () => {

    switch (operation) {
        case "sum":
            actualValue += newValue
            break;
            
        case "sub":
            actualValue -= newValue
            break;
    
        case "mul":
            actualValue *= newValue
            break;
    
        case "div":
            actualValue /= newValue
            break;
    }

    document.getElementById("display").innerHTML = actualValue
}