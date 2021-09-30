import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.inderfaces';
import { DbzService } from '../services/dbz.service';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  constructor() {}

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    porder: 100
  }

}
