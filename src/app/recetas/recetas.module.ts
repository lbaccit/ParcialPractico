import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecetasListComponent } from './recetas-list/recetas-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RecetasListComponent],
  exports: [RecetasListComponent]
})
export class RecetasModule { }

