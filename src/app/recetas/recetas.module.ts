import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecetasComponent } from './recetas.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RecetasComponent],
  exports: [RecetasComponent]
})
export class RecetasModule { }
