import { Injectable } from '@angular/core';
import { Item } from '../../../shared/models/item.model';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CollectionService {
  public collection$: Observable<Item[]>;
  itemsCollection: AngularFirestoreCollection<Item>;
  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('collection');
    this.setCollection(this.itemsCollection.valueChanges());
  }


  /**
  * return collection in an observable
  */
  getCollection(): Observable<Item[]> {
    return this.collection$;
  }

  /**
   * get collection from bdd
   * this is a super comment
   */
  setCollection(collection: Observable<Item[]>): void {
    this.collection$ = collection;
  }

  getItem(id: string): Observable<Item> {
    const item = this.afs.doc<Item>(`collection/${id}`).valueChanges();
    return item;
  }

  add(item: Item): void {
    item.id = this.afs.createId();
    this.itemsCollection.doc(item.id).set(item)
    .catch((error) => {
      console.log(error);
    });
  }

  delete(item: Item): void {
    this.itemsCollection.doc(item.id).delete()
      .catch((error) => {
        console.log(error);
      });
  }

  update(item: Item): void {
    this.itemsCollection.doc(item.id).update(item)
      .catch(error => console.log(error));
  }
}
