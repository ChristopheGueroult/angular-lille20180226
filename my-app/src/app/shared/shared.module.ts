import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NavComponent } from './components/nav/nav.component';
import { StateDirective } from './directives/state/state.directive';
import { StarsPipe } from './pipes/stars/stars.pipe';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    FormsModule
  ],
  declarations: [NavComponent, StateDirective, StarsPipe, FormComponent],
  exports: [
    NavComponent,
    StateDirective,
    StarsPipe,
    FormComponent
  ]
})
export class SharedModule { }
