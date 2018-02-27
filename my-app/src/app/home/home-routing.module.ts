import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './containers/home/home.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      appRoutes
    )
  ]
})
export class HomeRoutingModule { }
