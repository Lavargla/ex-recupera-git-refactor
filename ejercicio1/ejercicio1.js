let n1, n2, total;
function Suma(){
    
    n1 = parseInt(document.getElementById("n1").value);
    n2 = parseInt(document.getElementById("n2").value);

    total = n1 + n2;

    window.alert(total);
}

function Resta(){
    
    n1 = parseInt(document.getElementById("n1").value);
    n2 = parseInt(document.getElementById("n2").value);

    total = n1 - n2;

    window.alert(total);
}

function Multiplicacion(){
    
    n1 = parseInt(document.getElementById("n1").value);
    n2 = parseInt(document.getElementById("n2").value);
    
    total = n1 * n2;

    window.alert(total);
}

function Division(){
    
    n1 = parseInt(document.getElementById("n1").value);
    n2 = parseInt(document.getElementById("n2").value);

    total = n1 / n2;

    window.alert(total);
}