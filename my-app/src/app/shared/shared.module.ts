import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NavComponent } from './components/nav/nav.component';
import { StateDirective } from './directives/state/state.directive';
import { StarsPipe } from './pipes/stars/stars.pipe';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule
  ],
  declarations: [NavComponent, StateDirective, StarsPipe],
  exports: [
    NavComponent,
    StateDirective,
    StarsPipe
  ]
})
export class SharedModule { }
