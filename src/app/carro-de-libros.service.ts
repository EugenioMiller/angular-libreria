import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Libro } from './libros-lista/Libros';

/**
 * Maneja la lógica
 * 
 */
@Injectable({
  providedIn: 'root'
})


export class CarroDeLibrosService {

  private _carritoDeCompras : Libro [] = [];
  carritoDeCompras : BehaviorSubject <Libro []> = new BehaviorSubject ([]);

  constructor() { }
  
  AgregarACarrito(libro: Libro) {
    let item: Libro =this._carritoDeCompras.find((v1) => v1.nombre == libro.nombre);

    if (!item){
      this._carritoDeCompras.push({ ... libro});
    } else {
      item.valor += libro.valor;
    }
    this.carritoDeCompras.next(this._carritoDeCompras);
  }


}
