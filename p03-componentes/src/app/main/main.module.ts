import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BindingComponent } from './binding/binding.component';
import { FormsModule } from '@angular/forms';
import { ExpresionesComponent } from './expresiones/expresiones.component';
import { LocalComponent } from './local/local.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    BindingComponent,
    ExpresionesComponent,
    LocalComponent],
  exports: [
    BindingComponent,
    ExpresionesComponent,
    LocalComponent
    ]
})
export class MainModule { }
