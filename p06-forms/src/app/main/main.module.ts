import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main.component';
import { FormVistaComponent } from './form-vista/form-vista.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [MainComponent, FormVistaComponent],
  exports: [MainComponent]
})
export class MainModule { }
