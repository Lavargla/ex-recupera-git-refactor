function Suma(){

    let a, b, total1;
    
    a = parseInt(document.getElementById("n1").value);
    b = parseInt(document.getElementById("n2").value);

    total1 = a + b;

    window.alert(total1);
}

function Resta(){
    
    let a, b, total2;
    
    a = parseInt(document.getElementById("n1").value);
    b = parseInt(document.getElementById("n2").value);

    total2 = a - b;

    window.alert(total2);
}

function Multiplicacion(){

    let a, b, total3;
    
    a = parseInt(document.getElementById("n1").value);
    b = parseInt(document.getElementById("n2").value);
    
    total3 = a * b;

    window.alert(total3);
}

function Division(){

    let a, b, total4;
    
    a = parseInt(document.getElementById("n1").value);
    b = parseInt(document.getElementById("n2").value);

    total4 = a / b;

    window.alert(total4);
}