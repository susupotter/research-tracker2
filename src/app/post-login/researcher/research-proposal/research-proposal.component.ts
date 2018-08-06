import { Component, OnInit } from '@angular/core';
import { RadioValue } from '../../../component/radio-field/radio-value';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { FundTypeService } from '../../../api-service/config/research/fund-type.service';
import { SelectorValue } from '../../../component/selector-field/selector-field.component';

@Component({
  selector: 'app-research-proposal',
  templateUrl: './research-proposal.component.html',
  styleUrls: ['./research-proposal.component.css', '../../../style/form-style.css']
})
export class ResearchProposalComponent implements OnInit {

  public researchPlaceType: RadioValue[] = [{label: "ห้องปฏิบัติการ", value: "T"}, {label: "ภาคสนาม", value: "P"},{label: "สำนักงาน", value: "S"}]
  public YesOrNo: RadioValue[] = [{label: "ได้", value: "Y"}, {label: "ไม่ได้", value: "N"}]
  public researchStatusType: RadioValue[] = [{label: "โครงการวิจัยใหม่", value: "N"}, {label: "โครงการวิจัยต่อเนื่อง", value:"C"}]

  public researchType: RadioValue[] = [{label: "อาจารย์", value: "T"}, {label: "บุคคลากรกรมหาฯ", value: "P"},{label: "นักศึกษา", value: "S"}]

  public fundTypes: SelectorValue[] = [];

  tagModel1: String[] = [];
  tagModel2: String[] = [];

  public form : FormGroup;

  constructor(private formBuilder: FormBuilder, private fundTypeService: FundTypeService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      fundType: new FormControl(''),
      fundSourceType: new FormControl(''),
      fundBudgetType: new FormControl(''),
      nameEN: new FormControl(''),
      nameTH: new FormControl(''),
      researchStatus: new FormControl(''),
      durationYear: new FormControl(''),
      durationMonth: new FormControl(''),
      numberOfYear: new FormControl(''),
      fundYear: new FormControl(''),
      strategy: new  FormControl(''),
      organization: new  FormControl(''),
      plan: new  FormControl(''),
      issue: new  FormControl(''),
      tagsEN: new  FormControl(''),
      tagsTH: new  FormControl(''),
      dateFrom: new  FormControl(''),
      dateTo: new  FormControl(''),
      projectHeadUniqueId: new FormControl(''),
      projectHeadName: new FormControl(''),
      coResearchers: new  FormArray([this.createPeople()]),
      advisors: new  FormArray([]),
      researchStandard: new FormControl(''),
      place: new FormControl(''),
      city: new FormControl(''),
      country: new FormControl(''),
      requestedFund: new FormControl(''),
      result: new FormControl(''),
      allowToPublish: new FormControl(''),
      reasonNotAllowToPublish: new FormControl(''),
      requestFormDocument: new FormControl(''),
      otherDocuments: new FormArray([]),
    })
    this.initDropdown();
  }

  onRequestDocumentFileChange(event) {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.form.get('requestFormDocument').setValue({
          filename: file.name,
          filetype: file.type,
          value: reader.result.split(',')[1]
        })
      };
    }
  }

  onOthersDocumentFileChange(event, i) {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.form.get('otherDocuments').get(i).setValue({
          filename: file.name,
          filetype: file.type,
          value: reader.result.split(',')[1]
        })
      };
    }
  }

  createPeople(): FormGroup {
    return this.formBuilder.group({
      uniqueId: '',
      nameTH: '',
    });
  }

  addCoResearcher() {
    let formArray = this.form.get('coResearchers') as FormArray;
    formArray.push(this.createPeople());
  }

  addAdvisor() {
    let formArray = this.form.get('advisors') as FormArray;
    formArray.push(this.createPeople());
  }

  initDropdown(){
    this.fundTypeService.getList().subscribe(list => {
      for (var fundType of list) {
        this.fundTypes.push({ id: fundType.id, value: fundType.fundType });
      }
    }, error => {
      alert('Error: Cannot connect to server')
    })
  }

  

}
