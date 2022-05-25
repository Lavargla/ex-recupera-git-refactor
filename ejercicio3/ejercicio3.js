function Create (name) {
    this.name = name;
    this.array = [];
    
    this.add = function (name, quantity) { this.array[name] = quantity; }
    
    this.delete = function (name) { delete this.array[name]; }
    
    this.getQuantity = function (name) { return this.array[name]; }
    
    this.getName = function () { return this.name; }
}

var libros = new Create("Libros");
libros.add("AngularJS", 3);
libros.add("JavaScript", 10);
libros.getQuantity("JavaScript"); // 10
libros.delete("JavaScript");

var juegos = new Create("juegos");
juegos.add("Fifa", 5);
juegos.getQuantity("Fifa"); //5