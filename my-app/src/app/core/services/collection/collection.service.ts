import { Injectable } from '@angular/core';
import { Item } from '../../../shared/models/item.model';
import { COLLECTION } from '../../collection';

@Injectable()
export class CollectionService {
  private collection: Item[];
  constructor() {
    this.setCollection(COLLECTION);
  }

  /**
  * @description return collection
  */
  getCollection(): Item[] {
    return this.collection;
  }

  /**
   * @description get collection from bdd
   */
  setCollection(collection: Item[]): void {
    this.collection = collection;
  }
}
