import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BindingComponent implements OnInit {
  public sName: string;

  constructor() { }

  ngOnInit() {
    this.sName = 'Pepe';
  }

  btnBorrar() {
    this.sName = '';
  }

}
