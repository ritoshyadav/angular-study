import { Component } from '@angular/core';

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html'
})
export class ServerComponent{
    serverId:Number=10;
    activeStatus:String="offline";
    getActiveStatus(){
        return this.activeStatus;
    }
} 