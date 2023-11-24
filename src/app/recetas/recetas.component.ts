import { Component, OnInit } from '@angular/core';
import { Receta} from "./Receta"

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent implements OnInit {
  recetas: Array<Receta> = [];
  
  constructor() { }

  ngOnInit() {
  }

}

