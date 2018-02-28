import { Component, OnInit } from '@angular/core';

import { COLLECTION } from '../../../core/collection';
import { CollectionService } from '../../../core/services/collection/collection.service';
import { Item } from '../../../shared/models/item.model';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {
  collection: Item[];
  // constructor(public collectionService: CollectionService) {
  // }
  constructor(public collectionService: CollectionService) {
  }

  ngOnInit() {
    this.collection = this.collectionService.getCollection();
    // this.collection = this.collectionService.collection; // if collectionService.collection public
  }

}
