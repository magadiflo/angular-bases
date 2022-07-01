import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";

@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent,
    ],
    exports: [
        ListadoComponent,
    ],
    imports: [
        CommonModule, //*Ofrece las directivas como el *ngIf, *ngFor...
    ],
})
export class HeroesModule {

}

/**
 * *IMPORTANTE:
 * *Cuando trabajamos en la aplicación teniendo únicamente 
 * *al app.module.ts no requeríamos importar el CommonModule
 * *para hacer uso de las directivas *ngIf, *ngFor, etc...
 * *Pero ahora que vamos creando nuestros propios módulos, 
 * *necesitamos importar el CommonModule para hacer uso de esas
 * *directivas. ¿Por qué?
 * 
 * *RESPUESTA:
 * *De esta manera funciona angular, BrowserModule se encarga de proveer 
 * *los servicios esenciales para desplegar y ejecutar la app en el navegador, 
 * *adicionalmente re-exporta CommonModule desde @angular/common, 
 * *lo que significa que los componentes del módulo AppModule también tienen 
 * *acceso a las directivas de Angular que toda aplicación necesita, 
 * *como NgIf y NgFor.
 * *Esto significa que para el resto de módulos que no sean appModule, 
 * *es necesario el CommonModule.
 */