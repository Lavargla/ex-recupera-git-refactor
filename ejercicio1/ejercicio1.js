let n1, n2, total;

function Value_update(){
    n1 = parseInt(document.getElementById("n1").value);
    n2 = parseInt(document.getElementById("n2").value);
}

function Suma(){
    
    Value_update();

    total = n1 + n2;

    window.alert(total);
}

function Resta(){
    
    Value_update();

    total = n1 - n2;

    window.alert(total);
}

function Multiplicacion(){
    
    Value_update();
    
    total = n1 * n2;

    window.alert(total);
}

function Division(){
    
    Value_update();

    total = n1 / n2;

    window.alert(total);
}