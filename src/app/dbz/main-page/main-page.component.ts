import { Component } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

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

  //* De esta manera aplica la Inyección de Dependencia en Angular
  constructor(private dbzService: DbzService) { }

}
