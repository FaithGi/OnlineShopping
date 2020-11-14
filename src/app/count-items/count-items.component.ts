import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-items',
  templateUrl: './count-items.component.html',
  styleUrls: ['./count-items.component.scss']
})
export class CountItemsComponent implements OnInit {
  count:number=0;
  items = countItemsArray;
  countItemsArray:number ;
  item = this.items[0];
  title:string;
  Price:number;
  description:string;
 
  
  constructor() { }

  ngOnInit(): void {
  }
  Increment(item)
  {
    item.count +=1;
  }
  Decrement(item)
  {
    item.count -=1;
  }
}
 
  export class countItemsArray
  {
      title:string;
      Price:number;
      description:string;
      count:number;
  }
  export const cartItemsArray: countItemsArray[] = [
    { title: 'The Book Of God', Price: 12.99 , description:'A product' , count:0},
    { title: 'HTML book by Jim Currey', Price: 45.99 , description:'B product'  , count:0 },
    { title: 'The Book Of Life', Price: 45.99 , description:'C product' , count:0 },
      
    ];