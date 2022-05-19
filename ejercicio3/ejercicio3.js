function Crear (nombre) {
    this.nombre = nombre;
    this.array = [];
    
    this.add = function (nombre, cantidad) {
    this.array[nombre] = cantidad;
    }
    
    this.borrar = function (nombre) {
    delete this.array[nombre];
    }
    
    this.cantidad = function (nombre) {
    return this.array[nombre];
    }
    
    this.getNombre = function () {
    return this.nombre;
    }
}

var libros = new Crear("Libros");
libros.add("AngularJS", 3);
libros.add("JavaScript", 10);
libros.cantidad("JavaScript"); // 10
libros.borrar("JavaScript");

var juegos = new Crear("juegos");
juegos.add("Fifa", 5);
juegos.cantidad("Fifa"); //5