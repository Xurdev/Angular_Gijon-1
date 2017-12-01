import { Component, OnInit } from '@angular/core';
import { LibrosMockService } from '../../services/libros-mock.service';

@Component({
  selector: 'app-buscar-libros',
  templateUrl: './buscar-libros.component.html',
  styleUrls: ['./buscar-libros.component.css'],
})
export class BuscarLibrosComponent implements OnInit {

  aLibros: Array<string>;
  sClave: string;

  constructor(public librosMockService: LibrosMockService) { }

  ngOnInit() {
    this.aLibros = [];
  }

  btnBuscar() {
    this.aLibros =
      this.librosMockService.buscarLibro(this.sClave);
  }

}
