class Libro {
    constructor (autor, titulo) {
        this.autor = autor
        this.titulo = titulo
    }
}

class LibroTecnico extends Libro {
    constructor(autor, titulo, tema) {
         super(autor, titulo)
         this.tema = tema
    }
    mostrar () {
        console.log(this)
    }
    
}

let oLibro  = new LibroTecnico("Pepe","Angular para expertos", "Programación")
oLibro.editorial = "Anaya"
oLibro.mostrar()
