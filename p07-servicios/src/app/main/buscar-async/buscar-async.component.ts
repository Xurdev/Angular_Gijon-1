import { Component, OnInit } from '@angular/core';
import { LibrosMockService } from '../../services/libros-mock.service';

@Component({
  selector: 'app-buscar-async',
  templateUrl: './buscar-async.component.html',
  styleUrls: ['./buscar-async.component.css'],
})
export class BuscarAsyncComponent implements OnInit {

  aLibros: any;
  // Array<string>;
  sClave: string;

  constructor(public librosMockService: LibrosMockService) { }

  ngOnInit() {
    this.aLibros = [];
  }

  btnBuscar() {
     this.librosMockService.buscarLibrosAsync(this.sClave)
     .then(JSON.parse)
     .then(
       (response) => {
          console.log(response);
          this.aLibros = response;
        }, // función OK
       (error) => { console.log(error); } // funcion error
     );
  }

}
