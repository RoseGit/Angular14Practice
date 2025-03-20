import { Component } from "@angular/core";

/*Todas las vistas son componentes en Angualr */

/*Selector de etiqueta */
/*@Component({
    selector: "amb-home",
    template : "<h1>Home Page</h1>"
})
*/

/*Selector de clase */
@Component({
    selector: ".amb-home",
    template : "<h1>Home Page</h1>"
})

//export es como decir que es publica
export class HomeComponent{}