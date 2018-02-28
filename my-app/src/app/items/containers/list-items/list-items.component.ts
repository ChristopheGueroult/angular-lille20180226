import { Component, OnInit } from '@angular/core';

import { COLLECTION } from '../../../core/collection';
import { CollectionService } from '../../../core/services/collection/collection.service';
import { Item } from '../../../shared/models/item.model';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {

  collection$: Observable<Item[]>;
  constructor(private collectionService: CollectionService) {
  }

  ngOnInit() {
    this.collection$ = this.collectionService.collection$;
  }

}
