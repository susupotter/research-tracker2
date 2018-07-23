import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EducationService, Education } from '../../../api-service/user/data/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  public forms: FormGroup;
  modalTitle = "เพิ่ม / แก้ไขการศึกษา"
  public closeResult: string;

  public educationList: Education[];

  public modalRef: NgbModalRef;

  public selected: Education;

  @ViewChild("content") modal: NgbModal;

  constructor(private modalService: NgbModal, private formBuilder: FormBuilder
    , private educationService: EducationService) { }

  ngOnInit() {
    this.forms = this.formBuilder.group({
      instituteName: '',
      degreeName: '',
      subject: '',
      graduateYear: ''
    });

    this.list()
  }

  open(content, id?:String) {

    if(id){
      this.getEducation(id);
    } else {
      if(this.forms.controls['id']){
        this.forms.removeControl('id');
      }
      this.forms.reset()
    }
    this.modalRef = this.modalService.open(content, { backdropClass: 'light-blue-backdrop' });
    this.modalRef.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    })
  }

  getEducation(id: String){
    this.educationService.getEducation("uuu8888", id).subscribe( value => {
      this.selected = value;
      this.forms.addControl("id", new FormControl(""));
      this.forms.patchValue(this.selected);
      
    })
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


  list() {
    this.educationService.getList("uuu8888").subscribe(list => {
      this.educationList = list;
    }, error => {
      alert(error.error)
    })
  }

  saveEducation(){
    console.log(this.forms.getRawValue());
    this.educationService.saveEducation("uuu8888" ,this.forms.getRawValue()).subscribe(res => {
      alert("Success")
      this.modalRef.close();
      this.list();
    }, error => {
      alert(error.error)
    })
  }

  updateEducation(){
    this.educationService.updateEducation("uuu8888" ,this.forms.getRawValue()).subscribe(res => {
      alert("Success")
      this.modalRef.close();
      this.list();
    }, error => {
      alert(error.error)
    })
  }

}
