import { Component } from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})

export class SearchComponent {
    name: string = '';
    getName(e: any) {
        this.name = (<HTMLInputElement>e.target).value;
    }

}
