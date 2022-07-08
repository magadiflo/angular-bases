import { Injectable } from "@angular/core";

import { Personaje } from '../interfaces/dbz.interface';

/**
 * * El servicio es del tipo Singleton, de tal forma
 * * que si se llama de varios lugares, siempre se 
 * * va a llamar a la misma instancia.
 * * Es decir, el mensaje dentro de este constructor se
 * * imprimirá una vez en toda la aplicación, así este
 * * servicio sea llamado varias veces de diversos lugares
 */

@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        { nombre: 'Bulma', poder: 300 },
        { nombre: 'Maestro Roshi', poder: 800 },
    ];

    constructor() {
        console.log('Servicio inicializado');
    }

    get personajes(): Personaje[] {
        //* Spread operator ..., separa cada elemento del array (_personajes) 
        //* y como está dentro de [] se creará un nuevo arreglo con dichos elementos.
        //* En este caso es usado para COPIAR UN ARRAY, de esa manera rompemos la referencia
        //* con el arreglo original.

        //* Ejemplo: Aquí vemos que los elementos del array son expandidos (propagados)
        //* const array = [ 1, 2, 3 ];
        //* const result = [ ...array, 4, 5, 6 ];
        //*     //result: [ 1, 2, 3, 4, 5, 6 ]
        return [...this._personajes];
    }

    agregarNuevoPersonaje(personaje: Personaje): void {
        this._personajes.push(personaje);
    }

}