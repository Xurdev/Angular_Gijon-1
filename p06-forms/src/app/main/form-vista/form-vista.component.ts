import { Component, OnInit, ViewChild} from '@angular/core';
import { Impresion, Printer, Departamento } from '../../models/models';
@Component({
  selector: 'app-form-vista',
  templateUrl: './form-vista.component.html',
  styleUrls: ['./form-vista.component.css'],
})
export class FormVistaComponent implements OnInit {

  @ViewChild('form1') formVista: any;
  ordenImpresion: Impresion;
  aImpresoras: Array<Printer>;
  aDepartamentos: Array<Departamento>;

  constructor() { }

  ngOnInit() {
    this.ordenImpresion = new Impresion (
      {nombre: '', apellido: '', telefono: ''},
      {codigo: '', nombre: ''},
      false,
      false,
      {codigo: '', nombre: ''}
    );

    this.aImpresoras = [
      {codigo: '001', nombre: 'HP'},
      {codigo: '002', nombre: 'Lexmark'},
      {codigo: '003', nombre: 'Brother'},
    ];

    this.aDepartamentos = [
      {codigo: 'VN', nombre: 'Ventas'},
      {codigo: 'MK', nombre: 'Marketing'},
      {codigo: 'SS', nombre: 'Sistemas'},
    ];

    console.log(this.formVista);
  }

  enviar() {
    console.log('Datos enviados');
  }

  btnBorrar() {
    this.formVista.reset();
  }
}
