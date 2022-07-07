import { Component, Input } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent {

  @Input() nuevo: Personaje = this.inicializaPersonaje();

  @Input() personajes: Personaje[] = [];

  agregar(): void {
    if (this.nuevo.nombre.trim().length === 0) return;
    console.log(this.nuevo);
    this.personajes.push(this.nuevo);
    this.nuevo = this.inicializaPersonaje();
  }

  private inicializaPersonaje(): Personaje {
    return { nombre: '', poder: 0 };
  }

}
