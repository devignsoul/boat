import { Component, EventEmitter, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'boat';
  primero: boolean = false;
 

  constructor(){
    console.log(MouseEvent.prototype.isTrusted)
  }

  movimiento(event: any){
    console.log(MouseEvent.prototype.isTrusted)
    console.log(event)
    this.primero =  true;
    console.log(MouseEvent.prototype.isTrusted)
  }
}
