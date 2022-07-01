import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
    <h1>{{ titulo }}</h1>
    <h3>La base es <strong>{{ base }}</strong></h3>
    <div class="card">
        La interpolación se refiere a la incrustación de expresiones en texto marcado. De forma predeterminada, la
        interpolación utiliza las llaves dobles y como delimitadores. <span>{{</span><span>}}</span>
    </div>
    <br><br>
    
    <button type="button" (click)="acumular(base)">+{{ base }}</button>
    <span>{{ numero }}</span>
    <button type="button" (click)="acumular(-base)">-{{ base }}</button>
    `,
})
export class ContadorComponent {

    titulo: string = 'Contador App';
    numero: number = 0;
    base: number = 5;

    acumular(valor: number): void {
        this.numero += valor;
    }

}