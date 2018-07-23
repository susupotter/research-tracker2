import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { CareerService, Career } from '../../../api-service/user/data/career.service';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {

  public forms: FormGroup;
  modalTitle = "เพิ่ม / แก้ไขการทำงาน"
  public closeResult: string;

  public modalRef: NgbModalRef;

  public careerList: Career[];

  public selected: Career;

  constructor(private modalService: NgbModal,private formBuilder: FormBuilder, private careerService: CareerService) { }

  ngOnInit() {
    this.forms = this.formBuilder.group({
      startDate: '',
      endDate: '',
      organizationName: '',
      position: ''
    });


    this.list()
  }

  open(content, id?:String) {

    if(id){
      this.getCareer(id);
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
    });

  }

  getCareer(id: String){
    this.careerService.getCareer("uuu8888", id).subscribe( value => {
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
    this.careerService.getList("uuu8888").subscribe(list => {
      this.careerList = list;
    }, error => {
      alert(error.error)
    })
  }

  saveCareer(){
    console.log(this.forms.getRawValue());
    this.careerService.saveCareer("uuu8888" ,this.forms.getRawValue()).subscribe(res => {
      alert("Success")
      this.modalRef.close();
      this.list();
    }, error => {
      alert(error.error)
    })
  }

}
