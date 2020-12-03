import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CarroDeLibrosService } from '../carro-de-libros.service';
import { Libro } from '../libros-lista/Libros';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.scss']
})
export class CarritoComprasComponent implements OnInit {

  carritoDeCompras$: Observable<Libro[]>;

  constructor(private carro: CarroDeLibrosService) { 
    this.carritoDeCompras$ = carro.carritoDeCompras.asObservable();
  }

  ngOnInit(): void {
  }

}
