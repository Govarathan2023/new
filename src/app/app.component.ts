import { Component, ViewChild } from '@angular/core';
import { SmartComponent } from './smart/smart.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class Appcomponent {
  @ViewChild(SmartComponent)
  private smart!: SmartComponent
  msg(){
    console.log(this.smart.count++);
  }

}
