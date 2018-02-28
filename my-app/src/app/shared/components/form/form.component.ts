import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Item } from '../../models/item.model';
import { State } from '../../enums/state.enum';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form: FormGroup;
  libelles = Object.values(State);
  @Output() newItem: EventEmitter<Item> = new EventEmitter();
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      name: [
        '',
        Validators.compose([Validators.required, Validators.minLength(5)])
      ],
      reference: [
        '',
        Validators.compose([Validators.required, Validators.minLength(4)])
      ],
      state: State.ALIVRER
    });
  }

  isError(champs: string): boolean {
    return this.form.get(champs).invalid && this.form.get(champs).touched;
  }

  process() {
    this.newItem.emit(this.form.value);
  }

}
