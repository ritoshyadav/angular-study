import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles:[`
    .online{
        color:white;
    }
    `]
})
export class ServerComponent {
    serverId: Number = 10;
    activeStatus: String = "offline";

    constructor() {
        this.activeStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getActiveStatus() {
        return this.activeStatus;
    }
    getColor() {
        this.activeStatus === 'online' ? 'green' : 'red';
    }
} 