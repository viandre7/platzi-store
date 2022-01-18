import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = 'platzi-store';
  items = ['Viviana', 'Andrea', 'Garcia'];

  objeto = {};

  power = 10;

  ngOnInit() {
    //code
  }

  addItem(){
    this.items.push('nuevo item');
  }

  deletedItem(index: number){
    this.items.splice(index, 1);
  }


}
