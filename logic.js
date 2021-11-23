// console.log('Hello Rahber')

function add(){
    num1 = document.getElementById('firstNum').value;
    num2 = document.getElementById('secondNum').value;
    document.getElementById('result').innerHTML = "Sum of "+num1+ " and "+ num2+ " is: "+( parseInt(num1)+parseInt(num2));
}
function sub(){
    num1 = document.getElementById('firstNum').value;
    num2 = document.getElementById('secondNum').value;
    document.getElementById('result').innerHTML = "Subtraction of "+num1+" and "+num2+" is: "+(parseInt(num1)-parseInt(num2)) ;
}
function multiply(){
    num1 = document.getElementById('firstNum').value;
    num2 = document.getElementById('secondNum').value;
    document.getElementById('result').innerHTML = "Multiplication of "+num1+" and "+num2+" is: "+(num1*num2);
}

function division(){
    num1 = document.getElementById('firstNum').value;
    num2 = document.getElementById('secondNum').value;
    document.getElementById('result').innerHTML = "Division of "+num1+" and "+num2+" is: "+(num1/num2);
}