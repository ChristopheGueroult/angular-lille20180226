import { Component, OnInit } from '@angular/core';
import { Item } from '../../../shared/models/item.model';
import { CollectionService } from '../../../core/services/collection/collection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(
    private collectionService: CollectionService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  addItem(obj: Item): void {
    this.collectionService.add(obj);
    this.router.navigate(['/items/liste']);
  }

}
