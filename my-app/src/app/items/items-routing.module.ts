import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AddComponent } from './containers/add/add.component';
import { EditComponent } from './containers/edit/edit.component';
import { ListItemsComponent } from './containers/list-items/list-items.component';

const appRoutes: Routes = [
  { path: 'liste', component: ListItemsComponent },
  { path: 'add', component: AddComponent },
  { path: 'edit/:id', component: EditComponent },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      appRoutes
    )
  ],
  declarations: []
})
export class ItemsRoutingModule { }
