import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent {

  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  nuevo: Personaje = this.inicializaPersonaje();

  agregar(): void {
    if (this.nuevo.nombre.trim().length === 0) return;
    this.onNuevoPersonaje.emit(this.nuevo);
    this.nuevo = this.inicializaPersonaje();
  }

  private inicializaPersonaje(): Personaje {
    return { nombre: '', poder: 0 };
  }

}
