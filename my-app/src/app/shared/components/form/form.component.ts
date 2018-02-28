import { Component, OnInit } from '@angular/core';
import { State } from '../../enums/state.enum';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  state = State;

  nom: string;
  ref: string;
  etat: string;
  constructor() { }

  ngOnInit(): void {
    this.etat = State.ALIVRER;
  }

  process(form: FormGroup) {
    console.log(form.value);
  }

}
