import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.inderfaces';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    porder: 100
  }

}
