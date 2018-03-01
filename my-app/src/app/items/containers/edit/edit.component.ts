import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../../../shared/models/item.model';
import { CollectionService } from '../../../core/services/collection/collection.service';
import { Observable } from '@firebase/util';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  id: string;
  item: Item;
  constructor(
    private collectionService: CollectionService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.collectionService.getItem(this.id).subscribe((data) => {
      console.log(data);
      this.item = data;
    } );
  }

  update(item: Item): void {
    this.collectionService.update(item);
  }

}
