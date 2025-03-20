import { Component } from "@angular/core";

/*Todas las vistas son componentes en Angualr */

/*Selector de etiqueta */
@Component({
    selector: "amb-home",
    template : "<h1>Home Page</h1><span>{{title}}</span><table><tr><th>Name</th></tr><tr><td>Rose</td></tr></table>",
    styles:['h1{ color:red; font-family:Verdana}', 'h1{font-size:150px}']
})


/*Selector de clase */
/*@Component({
    selector: ".amb-home",
    template : "<h1>Home Page</h1>"
})*/

/*Selector de atributo */
/*@Component({
    selector: "amb-home",
    template : "<h1>Home Page</h1>"
})*/

//export es como decir que es publica
export class HomeComponent{
    title = 'Ambulance'
}