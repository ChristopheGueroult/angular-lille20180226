import { Injectable } from '@angular/core';
import { Item } from '../../../shared/models/item.model';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CollectionService {
  public collection$: Observable<Item[]>;
  itemsCollection: AngularFirestoreCollection<Item>;
  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('collection');
    this.setCollection(this.itemsCollection.valueChanges());
  }

  /**
  * @description return collection
  */
  getCollection(): Observable<Item[]> {
    return this.collection$;
  }

  /**
   * @description get collection from bdd
   */
  setCollection(collection: Observable<Item[]>): void {
    this.collection$ = collection;
  }
}
