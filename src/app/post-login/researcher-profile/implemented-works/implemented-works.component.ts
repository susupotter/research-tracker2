import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-implemented-works',
  templateUrl: './implemented-works.component.html',
  styleUrls: ['./implemented-works.component.css']
})
export class ImplementedWorksComponent implements OnInit {

  public forms: FormGroup;
  modalTitle = "เพิ่ม / แก้ไขผลงานที่นำไปใช้ประโยชน์แล้ว"
  public closeResult: string;

  constructor(private modalService: NgbModal,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.forms = this.formBuilder.group({
      year: '',
      name: '',
      implementation: '',
      effectOnEconomics: '',
      effectOnSociety: '',
      effectOnEnvironment: '',
      effectOnOthers: '', 
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
