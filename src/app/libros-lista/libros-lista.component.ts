import { Component, OnInit } from '@angular/core';
import { Libro } from './Libros';

@Component({
  selector: 'app-libros-lista',
  templateUrl: './libros-lista.component.html',
  styleUrls: ['./libros-lista.component.scss']
})
export class LibrosListaComponent implements OnInit {

  libros: Libro [] = [ 
    {
    "autor" : "John Katzenbach",
    "nombre" : "El psicoanalísta",
    "precio" : 800,
    "stock" : 20,  
    },
    {
      "autor" : "J.K. Rowling",
      "nombre" : "Harry Potter y la piedra filosofal",
      "precio" : 650,
      "stock" : 15,  
    },
    {
      "autor" : "George R.R Martin",
      "nombre" : "Choque de Reyes",
      "precio" : 700,
      "stock" : 0,  
    },
  ]





  constructor() { }

  ngOnInit(): void {
  }

}
