import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-patent',
  templateUrl: './patent.component.html',
  styleUrls: ['./patent.component.css']
})
export class PatentComponent implements OnInit {

  public forms: FormGroup;
  modalTitle = "เพิ่ม / แก้ไขสิทธิบัตร"
  public closeResult: string;

  constructor(private modalService: NgbModal,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.forms = this.formBuilder.group({
      type: '',
      name: '',
      patentNo: '',
      requestNo: '',
      nameOfRequester: '',
      requestDate: '',
      approveDate: '', 
    });
  }

  open(content) {

    this.modalService.open(content, { backdropClass: 'light-blue-backdrop' }).result.then((result) => {
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
      return  `with: ${reason}`;
    }
  }


}
