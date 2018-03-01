import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { ListItemsComponent } from './containers/list-items/list-items.component';
import { ItemComponent } from './components/item/item.component';
import { AddComponent } from './containers/add/add.component';
import { EditComponent } from './containers/edit/edit.component';


@NgModule({
  imports: [
    CommonModule,
    ItemsRoutingModule,
    SharedModule,
    RouterModule
  ],
  declarations: [ListItemsComponent, ItemComponent, AddComponent, EditComponent]
})
export class ItemsModule { }
