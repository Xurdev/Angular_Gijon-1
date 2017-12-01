import { Component, OnInit } from '@angular/core';
import { Printer, Departamento } from '../../models/models';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-model',
  templateUrl: './form-model.component.html',
  styleUrls: ['./form-model.component.css']
})
export class FormModelComponent implements OnInit {

  aImpresoras: Array<Printer>;
  aDepartamentos: Array<Departamento>;
  formulario: FormGroup;

  constructor() { }

  ngOnInit() {

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

    this.formulario = new FormGroup(
      {
      name: new FormControl('Pepe',
        [Validators.required, Validators.minLength(3)]),
      apellido: new FormControl('Perez',
        Validators.required),
      telefono: new FormControl('',
       [Validators.required, Validators.pattern('^\\d{9}$')]),
      impresora: new FormControl(),
      isColor: new FormControl(),
      isClaro: new FormControl(),
      departamento: new FormControl()
    });
  }

  enviar() {}

  btnBorrar() {
    this.formulario.reset();
  }

}
