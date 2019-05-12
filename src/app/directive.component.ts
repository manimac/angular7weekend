import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'custdirective',
  templateUrl: './directive.component.html'
})
export class calendarComponent {
 name = 'Dinesh'; 
 private students;
//  private headers;
 constructor(private _http : HttpClient){
  // this.headers = {};
  this._http.get('http://localhost:4200/assets/services.txt')
  .subscribe((data)=>{
    this.students = data;    
  }) 
  // this._http.post('http://localhost:4200/assets/services.txt',{name:this.name},this.headers)
 }
}
