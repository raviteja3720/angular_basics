import { Component } from '@angular/core';

@Component({
    selector: 'app-notification',
<<<<<<< HEAD
    template: `<div class="alert alert-warning" [hidden]="display">
                    <p>This website uses cookies to provide better user experience</p>
                    <div class="close">
                        <button class="btn" (click)="closeNotification()">X</button>
                    </div>
=======
    template: `<div class="alert alert-success" [ngClass]="{fadeOut: displayNotification}"> 
                  This website uses cookies to provide better user experience.
                  <div class="close"><button class="btn" (click)="closeNotification()">X</button></div>
>>>>>>> cd0812bef67e1acec33676110677caf43d35bee3
                </div>`,
    styles: ["div{margin: 10px 0px; padding: 10px 20px; text-align:center;}",
        "p{font-size: 14px;}", ".close{float: right; margin-top: -15px;}",
        ".fadeOut {visibility: hidden;opacity: 0; transition: visibility 0s 2s, opacity 2s linear;}"]
})
export class NotificationComponent {
    display: boolean = false;
    closeNotification() {
        this.display = true;
    }
}
