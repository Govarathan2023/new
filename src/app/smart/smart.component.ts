import { Component } from '@angular/core';

@Component({
  selector: 'app-smart',
  templateUrl: './smart.component.html',
  styleUrls: ['./smart.component.css']
})
export class SmartComponent {
fun(){
  console.log("Display data");
}
count=0;
}
