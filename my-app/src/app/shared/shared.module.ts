import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NavComponent } from './components/nav/nav.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  declarations: [NavComponent],
  exports: [
    NavComponent
  ]
})
export class SharedModule { }
