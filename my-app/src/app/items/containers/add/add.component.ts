import { Component, OnInit } from '@angular/core';
import { Item } from '../../../shared/models/item.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addItem(obj: Item): void {
    console.log(obj);
  }

}
