import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expresiones',
  templateUrl: './expresiones.component.html',
  styleUrls: ['./expresiones.component.css']
})
export class ExpresionesComponent implements OnInit {
  sName: string;
  nValor: number;
  constructor() { }

  ngOnInit() {
    this.sName = 'Pepe';
    this.nValor = 22;
  }

}
