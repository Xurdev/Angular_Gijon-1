import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ListaComponent implements OnInit {

  aTareas: Array<string>;
  sTarea: string;

  constructor() { }

  ngOnInit() {
    this.aTareas = [];
  }

  addTarea () {
    this.aTareas.push(this.sTarea);
    this.sTarea = '';
  }

}
