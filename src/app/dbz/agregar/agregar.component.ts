import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.inderfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  @Input() nuevo: Personaje = {
    nombre: '',
    porder: 0
  }

  constructor(private dbzService: DbzService) {}

  agregar() {

    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    this.dbzService.agregarPersonaje(this.nuevo);

    this.nuevo = {
      nombre: '',
      porder: 0,
    }

  }

}
