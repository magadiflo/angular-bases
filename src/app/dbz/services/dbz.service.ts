import { Injectable } from "@angular/core";

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

    constructor() {
        console.log('Servicio inicializado');
    }

}