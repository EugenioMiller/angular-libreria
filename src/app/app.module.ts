import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibrosListaComponent } from './libros-lista/libros-lista.component';
import { CarritoComprasComponent } from './carrito-compras/carrito-compras.component';
import { LibreriaHomeComponent } from './libreria-home/libreria-home.component';
import { LibreriaAboutComponent } from './libreria-about/libreria-about.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { FormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    LibrosListaComponent,
    CarritoComprasComponent,
    LibreriaHomeComponent,
    LibreriaAboutComponent,
    InputNumberComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
