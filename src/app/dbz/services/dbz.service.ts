import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.inderfaces';

@Injectable()
export class DbzService {

  private _personajes: Personaje[] = [
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

  get personajes() :Personaje[] {
    return [...this._personajes];
  }
  constructor() {}

  agregarPersonaje(personaje:Personaje) {
    this._personajes.push(personaje);
  }
}
