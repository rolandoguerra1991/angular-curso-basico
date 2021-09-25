import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.inderfaces';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  @Input() nuevo: Personaje = {
    nombre: '',
    porder: 0
  }

  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar() {

    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    this.onNuevoPersonaje.emit(this.nuevo);

    this.nuevo = {
      nombre: '',
      porder: 0,
    }

  }

}
