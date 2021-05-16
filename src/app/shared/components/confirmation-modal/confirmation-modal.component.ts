import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent  {
  
  modalService: any;

  constructor(private fecharModalRef: BsModalRef) { }

  clicou(): void {
    this.fecharModalRef.hide();
  }
}
