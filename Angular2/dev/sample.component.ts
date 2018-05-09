
import {Component} from 'angular2/core';

@Component({
    selector: 'sample',
    template: `
        Hi I'm {{name}} and this is my first angular2 component! <span [class.is-awesome]="inputElement.value==='yes'" >It's Awesome!</span>
    <br>
    <br>
    Is it awesome?
    <input text="text" #inputElement (keyup)="0">
   `,
    styleUrls:['src/css/sample.css']

})
export class SampleComponent {
    name = 'Nagendra';
}
//[class.is-awesome] is a class directive 