import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class LibrosService {
  sURL: string;

  constructor(public http: Http) {
    this.sURL = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
  }

  buscar(clave: string) {
    const aLibros: Array<string>  = [];
    const url = this.sURL + clave;
    return this.http.get(url).toPromise()
    .then((response) => {
      response.json().items.forEach(
        element => { aLibros.push(element.volumeInfo.title); }
        );
      return aLibros;
    });
  }

  buscarRx (clave: string) {
    const url = this.sURL + clave;
    return this.http.get(url).map(
        response => this.extractTitles(response),
        error => console.log(error)
        );
    }

    private extractTitles(response: Response) {
      if (response.json().items) {
        return response.json().items.map(
          book => book.volumeInfo.title);
        } else {
          return response;
        }
  }
}
}



