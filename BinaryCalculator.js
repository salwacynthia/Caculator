//append() will add the number to the screen
//addOperator() will add the operator
//clearAll will clear the screen
//equal() mathematical action ta korbe and final renderResult() function k dakbe
const res = document.getElementById("res");
let operator1 = operator = operator2 = "";

function equal(){

    operator1 = parseInt(operator1, 10); // parseint to integer 10 based
    operator2 = parseInt(operator2, 10);
    
    switch(operator){
        case '+':
            operator1 += operator2;
            break;

        case '-':
            operator1 -= operator2;
            break;
        
        case '*':
            operator1 *= operator2;
            break;
        
        case '/':
            if(operator2){
                operator1 /= operator2;
            }
            break;
        default:
            break;
    }
     operator1 = parseInt(operator1);
     operator2 =  operator = "";
    renderResult();
}

function appendDigit(value){
    if(operator){
        operator2 += value;
    } else {
        operator1 += value;
    }
   renderResult();
}

function addOperator(value){
    operator = value;
    renderResult();
}

function clearAll(){
    operator1 = operator = operator2 = "";
    renderResult();
}

function renderResult(){
    res.innerHTML= operator1 + operator + operator2;
}