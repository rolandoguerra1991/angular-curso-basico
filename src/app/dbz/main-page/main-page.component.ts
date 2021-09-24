import { Component } from '@angular/core';

interface Personaje {
  nombre: string;
  porder: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: '',
    porder: 0
  }

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

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    this.personajes.push(this.nuevo);
    this.nuevo = {
      nombre: '',
      porder: 0,
    }
  }

}
