import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',//you are just use template:`<html><titile></title......</html>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allownewServer = false;
  serverCreationStatus:String= 'Server can not craeted!';
  constructor() {
    setTimeout(() => {
      this.allownewServer = true;
    }, 2000);
  }

  ngOnInit() {

  }
  onCreatedServer() {
    this.serverCreationStatus ='Server created Successfully'
  }
}
