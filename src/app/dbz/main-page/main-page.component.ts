import { Component } from '@angular/core';

interface Personaje {
  nombre: string;
  poder: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  nuevo: Personaje = this.inicializaPersonaje();

  personajes: Personaje[] = [
    { nombre: 'Bulma', poder: 300 },
    { nombre: 'Maestro Roshi', poder: 800 },
  ];


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
