import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',//you are just use template:`<html><titile></title......</html>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allownewServer = false;
  serverCreationStatus:String= 'Server can not craeted!';
  serverName='Server timeline';
  serverCeated:boolean=false;
  servers=['server1','server2'];
  constructor() {
    setTimeout(() => {
      this.allownewServer = true;
    }, 2000);
    
  }

  ngOnInit() {

  }
  onCreatedServer() {
    this.serverCeated=true
    console.log("servername",this.serverName)
    this.servers.push(this.serverName);
    
    this.serverCreationStatus =`Server created Successfully,Server Name`+this.servers;
  }
  onUpdateServerName(event:Event){
    this.serverName=(<HTMLInputElement>event.target).value;

  }

}
