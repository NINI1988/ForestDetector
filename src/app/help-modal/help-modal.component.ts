import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-help-modal',
  imports: [CommonModule, FormsModule],
  templateUrl: './help-modal.component.html',
  styleUrl: './help-modal.component.css'
})
export class HelpModalComponent
{
  showCheckbox = false;
  dontShowAgain = false;

  constructor(public activeModal: NgbActiveModal)
  {
  }

  closeModal()
  {
    console.log("closeModal")
    if (this.showCheckbox && this.dontShowAgain)
    {
      localStorage.setItem('hideHelpModal', 'true');
    }
    this.activeModal.close();
  }

  // Static method to open modal.
  static async open(modalService: NgbModal, showCheckbox: boolean = false)
  {
    console.log(localStorage.getItem('hideHelpModal'))
    if (showCheckbox && localStorage.getItem('hideHelpModal'))
    {
      // Do not open if user chose "Don't show again"
      return
    }
    const modalRef = modalService.open(HelpModalComponent, { size: 'xl', scrollable: true });
    modalRef.componentInstance.showCheckbox = showCheckbox;
    try
    {
      await modalRef.result; // Wait until modal closes
      modalRef.componentInstance.closeModal();
    } catch (error: any)
    {
      // dismissed
      modalRef.componentInstance.closeModal(); // Call closeModal on dismiss
    }
  }

}
