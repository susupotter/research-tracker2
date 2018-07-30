import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ImplementedWorkService, ImplementedWork } from '../../../api-service/user/data/implemented-work.service';

@Component({
  selector: 'app-implemented-works',
  templateUrl: './implemented-works.component.html',
  styleUrls: ['./implemented-works.component.css']
})
export class ImplementedWorksComponent implements OnInit {

  public forms: FormGroup;
  modalTitle = "เพิ่ม / แก้ไขผลงานที่นำไปใช้ประโยชน์แล้ว"
  public closeResult: string;

  public modalRef: NgbModalRef;

  public workList: ImplementedWork[];

  public selected: ImplementedWork;

  constructor(private modalService: NgbModal,private formBuilder: FormBuilder, private implementedWorkService: ImplementedWorkService) { }

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

    this.list();
  }

  open(content, id?:String) {

    if(id){
      this.getImplementedWork(id);
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

  getImplementedWork(id: String){
    this.implementedWorkService.getImplementedWork("uuu8888", id).subscribe( value => {
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
    this.implementedWorkService.getList("uuu8888").subscribe(list => {
      this.workList = list;
    }, error => {
      alert(error.error)
    })
  }

  saveImplementedWork(){
    console.log(this.forms.getRawValue());
    this.implementedWorkService.saveImplementedWork("uuu8888" ,this.forms.getRawValue()).subscribe(res => {
      alert("Success")
      this.modalRef.close();
      this.list();
    }, error => {
      alert(error.error)
    })
  }

}
