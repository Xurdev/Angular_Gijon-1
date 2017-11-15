import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main.component';
import { ListaComponent } from './lista/lista.component';
import { ListaV4Component } from './lista-v4/lista-v4.component';
import { AcumuladorComponent } from './acumulador/acumulador.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    MainComponent,
    ListaComponent,
    ListaV4Component,
    AcumuladorComponent
  ],
  exports: [MainComponent]
})
export class MainModule { }
