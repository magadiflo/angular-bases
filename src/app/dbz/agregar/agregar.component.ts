import { Component } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent {

  nuevo: Personaje = this.inicializaPersonaje();

  constructor(private dbzService: DbzService) { }

  agregar(): void {
    if (this.nuevo.nombre.trim().length === 0) return;
    this.dbzService.agregarPersonaje(this.nuevo);
    this.nuevo = this.inicializaPersonaje();
  }

  private inicializaPersonaje(): Personaje {
    return { nombre: '', poder: 0 };
  }

}
