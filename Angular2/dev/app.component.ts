
import {Component} from 'angular2/core';
import {SampleComponent} from './sample.component';

@Component({
    selector: 'app',
    template: `
    	<h1> This is my app component </h1>  
        <sample></sample>      
    `,
    directives:[SampleComponent]

})
export class AppComponent {

}