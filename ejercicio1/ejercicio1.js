let a, b, total;
function Suma(){
    
    a = parseInt(document.getElementById("n1").value);
    b = parseInt(document.getElementById("n2").value);

    total = a + b;

    window.alert(total);
}

function Resta(){
    
    a = parseInt(document.getElementById("n1").value);
    b = parseInt(document.getElementById("n2").value);

    total = a - b;

    window.alert(total);
}

function Multiplicacion(){
    
    a = parseInt(document.getElementById("n1").value);
    b = parseInt(document.getElementById("n2").value);
    
    total = a * b;

    window.alert(total);
}

function Division(){
    
    a = parseInt(document.getElementById("n1").value);
    b = parseInt(document.getElementById("n2").value);

    total = a / b;

    window.alert(total);
}