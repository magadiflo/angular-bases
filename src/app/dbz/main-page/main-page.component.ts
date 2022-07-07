import { Component } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  personajes: Personaje[] = [
    { nombre: 'Bulma', poder: 300 },
    { nombre: 'Maestro Roshi', poder: 800 },
  ];

  agregarNuevoPersonaje(personaje: Personaje): void {
    this.personajes.push(personaje);
  }

}
