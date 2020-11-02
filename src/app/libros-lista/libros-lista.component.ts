import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libros-lista',
  templateUrl: './libros-lista.component.html',
  styleUrls: ['./libros-lista.component.scss']
})
export class LibrosListaComponent implements OnInit {

  libro1= {
    "autor" : "John Katzenbach",
    "nombre" : "El psicoanalísta",
    "precio" : 800,
    "stock" : 20  
  }

  libro2= {
    "autor" : "J.K. Rowling",
    "nombre" : "Harry Potter y la piedra filosofal",
    "precio" : 650,
    "stock" : 15  
  }

  libro3= {
    "autor" : "George R.R Martin",
    "nombre" : "Choque de Reyes",
    "precio" : 700,
    "stock" : 8  
  }

  constructor() { }

  ngOnInit(): void {
  }

}
