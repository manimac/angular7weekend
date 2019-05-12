import { Pipe,PipeTransform } from '@angular/core';


@Pipe({
   name : 'customfilter'
})
export class customFilter implements PipeTransform {
  transform(items){
    return items.toUpperCase();
  };
}
