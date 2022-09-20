import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'First Angular App';
  date =new Date();

  constructor(){
  console.log("C Called");
  this.doSomething('Mohsin')


}

doSomething(val:string):void{
  val="Awesome"
}



}
