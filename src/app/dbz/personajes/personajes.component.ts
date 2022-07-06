import { Component } from '@angular/core';

interface Personaje {
  nombre: string;
  poder: number;
}

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styles: [
  ]
})
export class PersonajesComponent {

  personajes: Personaje[] = [
    { nombre: 'Bulma', poder: 300 },
    { nombre: 'Maestro Roshi', poder: 800 },
  ];


}
