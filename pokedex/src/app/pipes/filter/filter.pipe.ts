import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: string): any{
    const resultsPosts = [];
    if (arg) {
      for (const post of value) {
        if ((post.name.toLowerCase().indexOf(arg.toLowerCase())) > -1) {
          resultsPosts.push(post);
        } else if ( String( this.zeros(post.id)).indexOf(arg) > -1) {
          resultsPosts.push(post); 
        }
      };
      return resultsPosts;
    }else{
      return value; 
    }
  }

  zeros(value:number){
    var s = value+"";
    while (s.length < 3) s = "0" + s;
    return s;
  }

}
