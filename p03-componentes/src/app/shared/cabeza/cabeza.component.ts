import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabeza',
  templateUrl: './cabeza.component.html',
  styleUrls: ['./cabeza.component.css']
})
export class CabezaComponent implements OnInit {

  public sTitulo: string;
  constructor() {
    // se usa para inyección de dependencias
   }

  ngOnInit() {
    this.sTitulo = 'Módulos';
  }

}
