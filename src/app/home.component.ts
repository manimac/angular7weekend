import { Component } from '@angular/core';
import { customService } from './custom.service';

@Component({
  selector: 'app-root',
  template: '<custdirective></custdirective><div>Home component{{name}}</div>',
  providers : [customService]
})
export class HomeComponent {
  private name;
  constructor(private _customService : customService){
    this.name = this._customService.getContent();
  }
}
