import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  title = 'my application';
  name = 'Dinesh';
  showClass = true;
  styleProp = {
    background : 'red',
    color : 'green'
  }
  save(){
    this.showClass = !this.showClass;
  }
  students = [
    {
      name : 'Dinesh',
      age : 20
    },
    {
      name : 'Karthick',
      age : 22
    },
    {
      name : 'Raju',
      age : 27
    }
  ]


}
