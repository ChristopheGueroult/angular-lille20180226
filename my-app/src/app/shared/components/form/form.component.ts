import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Item } from '../../models/item.model';
import { State } from '../../enums/state.enum';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  closeResult: string;
  form: FormGroup;
  libelles = Object.values(State);
  @Output() newItem: EventEmitter<Item> = new EventEmitter();
  @Input() item: Item;
  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal
  ) { }
  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      name: [
        this.item ? this.item.name : '',
        Validators.compose([Validators.required, Validators.minLength(5)])
      ],
      reference: [
        this.item ? this.item.reference : '',
        Validators.compose([Validators.required, Validators.minLength(4)])
      ],
      state: this.item ? this.item.state : State.ALIVRER
    });
  }

  isError(champs: string): boolean {
    return this.form.get(champs).invalid && this.form.get(champs).touched;
  }

  getItem(): Item {
    const data = this.form.value as Item;
    if (!this.item) {
      return data; // <- in case addItem
    }
    const id = this.item.id;
    return {id, ...data }; // <- in case editItem
  }

  process() {
    const datas = this.getItem();
    this.newItem.emit(datas);
    this.form.reset();
    this.form.get('state').setValue(State.ALIVRER);
  }

  open() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.title = 'Confirmation ?';
    modalRef.componentInstance.msg = 'Voulez vous ajouter cette commande';
    modalRef.result.then((result) => {
      // click btn annuler
      console.log(result);
    }, (reason) => {
      // click btn confirmer
      console.log(reason);
      this.process();
    });
  }

  private getDismissReason(reason: any): string {
    // if (reason === ModalDismissReasons.ESC) {
    //   return 'by pressing ESC';
    // } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    //   return 'by clicking on a backdrop';
    // } else {
    //   return  `with: ${reason}`;
    // }
  }

}
