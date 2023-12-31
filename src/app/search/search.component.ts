import { Component } from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})

export class SearchComponent {

    searchValue: string = '';

    changeValue(e: any) {

        this.searchValue = (<HTMLInputElement>e.target).value;
    }

    name: string = '';
    getName(e: any) {
        this.name = (<HTMLInputElement>e.target).value;
    }

    name2: string = this.name;
}
