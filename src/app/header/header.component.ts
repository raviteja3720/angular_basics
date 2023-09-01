import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    slogan: string = "your one stop shop for everything you need ";
    getslogan() {
        return this.slogan;
    }
    source: string = "assets/shopping.jpg";

}
