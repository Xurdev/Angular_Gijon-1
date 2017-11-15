import { Injectable } from '@angular/core';

@Injectable()
export class LibrosMockService {

  aLibros: Array<string>;
  constructor() {
    this.aLibros = [
      'Angular básico',
      'Angular en 19 minutos',
      'Angular avanzado'
    ];
  }

  buscarLibro(clave: string) {
    return this.aLibros;
  }
}
