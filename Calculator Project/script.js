let num1="";
let num2="";
let operator="";
let total="";

$(document).ready(function(){
    $('button').on('click', function(e){
        let btn = e.target.innerHTML;
        if(btn>='0' && btn<='9' || btn=='.'){
            handleNumber(btn);
        }
        else if(btn=='AC'){
            $('.input').text("0");
            num1 = '';
            num2 = '';
            operator = '';
            total = '';

        }
        else{
            handleOperator(btn);
        }
    });
});

function handleNumber(num){
    if(operator===""){
        num1+=num;
        displayButton(num1);
    }
    else{
        num2+=num;
        displayButton(`${num1} ${operator} ${num2}`);
    }

    
}

function factorial(n) {
    if (n < 0) return;
    if (n < 2) return 1;
    return n * factorial(n - 1);
  }

function handleOperator(oper){
    if(operator===""){
        operator=oper;
        displayButton(`${num1} ${operator}`);
    }
    else{
        
        handleTotal();
        operator=oper;
    }
}

function handleTotal(){
    switch(operator){
        case '+': 
            total= +num1 + +num2; 
            displayButton(total);
            break;
        case '-': 
            total= +num1 - +num2; 
            displayButton(total);
            break;
        case '/': 
            total= +num1 / +num2; 
            displayButton(total);
            break;
        case 'X': 
            total= +num1 * +num2; 
            displayButton(total);
            break;
        case '%':
            total= +num1 % +num2;    
            displayButton(total);    
            break;
        case 'x²':
            total= +num1 * +num1;    
            displayButton(total);    
            break;
        case '√x':
            total= Math.sqrt(+num1);    
            displayButton(total);    
            break;
        case 'x³':
            total=+num1 * +num1 * +num1;    
            displayButton(total);    
            break;
        case 'sin':
            total = Math.sin(+num1);    
            displayButton(total);    
            break;
        case 'cos':
            total = Math.cos(+num1);    
            displayButton(total);    
            break;
        case 'tan':
            total = Math.tan(+num1);    
            displayButton(total);    
            break;
        case 'log':
            total = Math.log(+num1);    
            displayButton(total);    
            break;
        case 'π':
            total = Math.PI* + num1;    
            displayButton(total);    
            break;
        case '!':
            total = factorial(+num1);    
            displayButton(total);    
            break;
    }

    updateVariables();
}

function displayButton(btn){
    $('.input').text(btn);
}

function updateVariables(){
    num1=total;
    num2='';
    operator='';

}