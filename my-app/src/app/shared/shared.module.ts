import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NavComponent } from './components/nav/nav.component';
import { StateDirective } from './directives/state/state.directive';
import { StarsPipe } from './pipes/stars/stars.pipe';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [NavComponent, StateDirective, StarsPipe, FormComponent, ModalComponent],
  exports: [
    NavComponent,
    StateDirective,
    StarsPipe,
    FormComponent
  ],
  entryComponents : [
    ModalComponent
  ]
})
export class SharedModule { }
