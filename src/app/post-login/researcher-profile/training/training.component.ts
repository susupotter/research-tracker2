import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Training, TrainingService } from '../../../api-service/user/data/training.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  public forms: FormGroup;
  modalTitle = "เพิ่ม / แก้ไขการอบรม"
  public closeResult: string;

  public modalRef: NgbModalRef;

  public trainingList: Training[];

  public selected: Training;

  constructor(private modalService: NgbModal,private formBuilder: FormBuilder, private trainingService: TrainingService) { }

  ngOnInit() {
    this.forms = this.formBuilder.group({
      date: '',
      trainingName: '',
      holderName: '',
      country: '',
      place: '',
      details: ''
    });

    this.list();
  }

  open(content, id?:String) {

    if(id){
      this.getTraining(id);
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

  getTraining(id: String){
    this.trainingService.getTraining("uuu8888", id).subscribe( value => {
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
    this.trainingService.getList("uuu8888").subscribe(list => {
      this.trainingList = list;
    }, error => {
      alert(error.error)
    })
  }

  saveTraining(){
    console.log(this.forms.getRawValue());
    this.trainingService.saveTraining("uuu8888" ,this.forms.getRawValue()).subscribe(res => {
      alert("Success")
      this.modalRef.close();
      this.list();
    }, error => {
      alert(error.error)
    })
  }

}
