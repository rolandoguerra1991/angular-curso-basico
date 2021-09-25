import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.inderfaces';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      porder: 15000
    },
    {
      nombre: 'Krilin',
      porder: 7500
    },
    {
      nombre: 'Vegeta',
      porder: 10000
    },
  ];

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    porder: 100
  }

  agregarNuevoPersonaje(personaje: Personaje) {
    this.personajes.push(personaje);
  }

}
