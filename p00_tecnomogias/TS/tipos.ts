interface Autor {
    nombre: string;
    apellido: string;
    algo(x:number): void;
}

class Tipos {
    name: string;
    edad: number;
    isHombre : boolean;
    aDatos: Array<string>;
    aNombres: string[];
    algo: any[];
    absurdo: {};
    otroAutor: {
        nombre: string;
        apellido: string;
    };
    autor: Autor;
    id: number | string;
    hacerAlgo : Function;
}

class AutorModel implements Autor {
    nombre;
    apellido;
    algo (z) {}
}