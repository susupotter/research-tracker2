import { Component, OnInit } from '@angular/core';
import { NgbModalRef, ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-manage-admin-user',
  templateUrl: './manage-admin-user.component.html',
  styleUrls: ['./manage-admin-user.component.css', '../../../../style/form-style.css']
})
export class ManageAdminUserComponent implements OnInit {

  public closeResult: string;
  public modalRef: NgbModalRef;
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  open(content, id?: String) {

    this.modalRef = this.modalService.open(content, { backdropClass: 'light-blue-backdrop' });
    this.modalRef.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
