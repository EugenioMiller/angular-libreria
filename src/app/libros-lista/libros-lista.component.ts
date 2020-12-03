import { Component, OnInit } from '@angular/core';
import { CarroDeLibrosService } from '../carro-de-libros.service';
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
    "valor": 0, 
    },
    {
      "autor" : "J.K. Rowling",
      "nombre" : "Harry Potter y la piedra filosofal",
      "precio" : 650,
      "stock" : 15, 
      "valor": 0,  
    },
    {
      "autor" : "George R.R Martin",
      "nombre" : "Choque de Reyes",
      "precio" : 700,
      "stock" : 2,  
      "valor": 0, 
    },
  ]

  constructor(private carro: CarroDeLibrosService) {
   }

  ngOnInit(): void {
  }

  AgregarACarrito(libro): void{
    this.carro.AgregarACarrito(libro);
    libro.stock -= libro.valor;
    libro.valor = 0;
  }

}
