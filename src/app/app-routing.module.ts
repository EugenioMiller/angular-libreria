import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibreriaAboutComponent } from './libreria-about/libreria-about.component';
import { LibreriaHomeComponent } from './libreria-home/libreria-home.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: LibreriaHomeComponent
  },
  {
    path: 'about',
    component: LibreriaAboutComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
