class Autor {
    constructor (public nombre: string,  public apellido: string) {}
}

class Libro {
    public autor: Autor;
    public titulo: string;
    constructor (autor, titulo) {
        this.autor = autor
        this.titulo = titulo
    }

    algo () {}
}

class LibroTecnico extends Libro {
    private tema: string;
    constructor(autor, titulo, tema) {
         super(autor, titulo)
         this.tema = tema
    }
    mostrar () {
        console.log(this)
    }
    
}

let oLibro1  = new LibroTecnico( new Autor ('Pepe', 'Perez'),
"Angular para expertos", "Programación")
let oLibro2  = new LibroTecnico({nombre: 'Luis'},
"Angular para expertos", "Programación")
oLibro1.mostrar();
oLibro2.mostrar();
