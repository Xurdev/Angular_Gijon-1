import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { BuscarLibrosComponent } from './buscar-libros/buscar-libros.component';
import { FormsModule } from '@angular/forms';
import { BuscarAsyncComponent } from './buscar-async/buscar-async.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    MainComponent,
    BuscarLibrosComponent,
    BuscarAsyncComponent
  ],
  exports: [MainComponent]
})
export class MainModule { }
