import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  public forms: FormGroup;
  modalTitle = "เพิ่ม / แก้ไขการอบรม"
  public closeResult: string;

  constructor(private modalService: NgbModal,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.forms = this.formBuilder.group({
      date: '',
      trainingName: '',
      holderName: '',
      country: '',
      place: '',
      details: ''
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
