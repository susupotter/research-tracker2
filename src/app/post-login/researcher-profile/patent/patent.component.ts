import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { PatentService, Patent } from '../../../api-service/user/data/patent.service';
import { UploadFileService } from '../../../api-service/upload-file.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-patent',
  templateUrl: './patent.component.html',
  styleUrls: ['./patent.component.css']
})
export class PatentComponent implements OnInit {

  public forms: FormGroup;
  modalTitle = "เพิ่ม / แก้ไขสิทธิบัตร"
  public closeResult: string;

  public patentList: Patent[];

  public selected: Patent;

  public modalRef: NgbModalRef;


  constructor(private modalService: NgbModal, private formBuilder: FormBuilder, private cd: ChangeDetectorRef, private patentService: PatentService, private uploadFileService: UploadFileService) { }

  ngOnInit() {
    this.forms = this.formBuilder.group({
      type: '',
      name: '',
      patentNo: '',
      requestNo: '',
      nameOfRequester: '',
      requestDate: '',
      approveDate: '',
      files: this.formBuilder.array([this.createFileFormControl()])
    });
    this.list()
  }

  open(content, id?: String) {

    if (id) {
      this.getPatent(id);
    } else {
      if (this.forms.controls['id']) {
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

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  createFileFormControl() {
    return new FormControl(new FormData());
  }

  addItem(): void {
    let items = this.forms.get('files') as FormArray;
    items.push(this.createFileFormControl());
  }

  onFileChange(event, index) {
    console.log("index: " + index);
    console.log(event);

    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);

      let uploadFile: FormData = this.prepareUpload(file);
      //Upload files
      this.uploadFileService.uploadFile("uuu8888", uploadFile).subscribe(result => {
        console.log(result);

        let files = this.forms.get('files') as FormArray;
        files.at(index).patchValue(result.fileName);
        console.log(this.forms);
      });

      /*reader.onload = () => {
        //console.log(reader.result);

        
        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
      };*/
    }
  }



  savePatent() {
    console.log(this.forms);
    this.patentService.savePatent("uuu8888", this.forms.getRawValue()).subscribe(response => {
      alert("Success")
      this.modalRef.close();
      this.list();
    }, error => {
      alert(error.error)
    })
  }

  prepareUpload(file: File) {
    let data = new FormData();
    data.append('file', file, file.name);
    return data;
  }

  list() {
    this.patentService.getList("uuu8888").subscribe(list => {
      this.patentList = list;
    }, error => {
      alert(error.error)
    })
  }

  getPatent(id: String) {
    this.patentService.getPatent("uuu8888", id).subscribe(value => {
      this.selected = value;
      this.forms.addControl("id", new FormControl(""));
      this.forms.patchValue(this.selected);

    })
  }

  /*private prepareSave(): any {
    let form = new FormData();
    let files = new FormData();
    Object.keys(this.forms.controls).forEach(key => {
      form.append(key, this.forms.get(key).value);
    });

    console.log(form);

    let result = new FormData()
    result.append('patent', patent);

    return result;
  }*/


}
