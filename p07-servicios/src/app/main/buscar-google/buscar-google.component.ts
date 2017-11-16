import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-buscar-google',
  templateUrl: './buscar-google.component.html',
  styleUrls: ['./buscar-google.component.css'],
})
export class BuscarGoogleComponent implements OnInit {

  sURL: string;
  aLibros: Array<string>;
  sClave: string;

  constructor(public http: Http) { }

  ngOnInit() {
    this.aLibros = [];
    this.sURL = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
  }

  btnBuscar() {
    this.aLibros = [];
    const url = this.sURL + this.sClave;
    this.http.get(url).toPromise()
    .then((response) => {
      response.json().items.forEach(
        element => {
          this.aLibros.push(element.volumeInfo.title);
        }
      );
    });
  }

  btnBuscarRes() {
    this.aLibros = [];
    const url = this.sURL + this.sClave;
    this.http.get(url).subscribe((response) => {
      response.json().items.forEach(
        element => {
          this.aLibros.push(element.volumeInfo.title);
        }
      );
    });
  }
}
