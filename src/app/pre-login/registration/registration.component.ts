import { Component, OnInit } from '@angular/core';
import { RadioValue } from '../../component/radio-field/radio-value';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { SelectorValue } from '../../component/selector-field/selector-field.component';
import { SectorTypeService } from '../../api-service/config/user/sector-type.service';
import { UserRegisterService } from '../../api-service/config/user/user-register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public genderList: RadioValue[] = [{ label: "ชาย", value: "M" }, { label: "หญิง", value: "F" }];
  public educationList: RadioValue[] = [{ label: "ต่ำกว่าปริญญาตรี", value: "N" }, { label: "ปริญญาตรี", value: "B" }, { label: "ปริญญาโท", value: "M" }, { label: "ปริญญาเอก", value: "D" }];
  public educationStatusList: RadioValue[] = [{ label: "จบการศึกษา", value: "T" }, { label: "กำลังศึกษา", value: "F" }];
  public roleList: RadioValue[] = [{ label: "นักวิจัยประเภทอาจารย์", value: "T" }, { label: "นักวิจัยประเภทนักศึกษา", value: "S" }, { label: "นักวิจัยประเภทเจ้าหน้าที่", value: "O" }, { label: "บุคคลทั่วไป", value: "P" }];

  public sectorTypes: SelectorValue[] = [];

  public forms: FormGroup;

  public isResearcher: boolean = false;

  constructor(private formBuilder: FormBuilder, private sectorTypeService: SectorTypeService
    , private registerService: UserRegisterService, private route: Router) { }

  ngOnInit() {
    this.forms = this.formBuilder.group({
      nameSurnameTH: new FormControl(''),
      nameSurnameEN: new FormControl(''),
      uniqueId: new FormControl(''),
      gender: new FormControl(''),
      address: new FormControl(''),
      birthDate: new FormControl(''),
      education: new FormControl(''),
      userTypeId: new FormControl(''),
      userType: new FormControl(''),
      sector: new FormControl(''),
      username: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl(''),
      email: new FormControl('')
    })

    this.forms.controls['userType'].valueChanges.subscribe(value => {
      this.isResearcher = value == 'P' ? false : true;
    })

    this.forms.controls['sector'].valueChanges.subscribe(value => {
      console.log(this.forms.getRawValue());
    })

    this.sectorTypeService.getList().subscribe(list => {
      for (var sector of list) {
        this.sectorTypes.push({ id: sector.id, value: sector.sectorType });
      }
    }, error => {
      alert('Error: Cannot connect to server')
    })

  }

  onSubmit() {
      this.register();
  }

  onClear() {
    this.forms.reset();
  }

  register() {
    console.log(this.forms.getRawValue())
    this.registerService.register(this.forms.getRawValue()).subscribe(res => {
      alert("Success")
    }, error => {
      alert(error.error)
    })
  }

  goBackToLogin(){
    this.route.navigateByUrl('/login/registration');
  }

  /*createEducationHistory(): FormGroup {
    return this.formBuilder.group({
      instituteName: '',
      degreeName: '',
      subject: '',
      graduateYear: ''
    });
  }

  addEducationHistory() {
    let formArray = this.forms.get('educationHistoryList') as FormArray;
    formArray.push(this.createEducationHistory());
  }

  createCareerHistory(): FormGroup {
    return this.formBuilder.group({
      startDate: '',
      endDate: '',
      organizationName: '',
      position: ''
    });
  }


  addCareerHistory() {
    let formArray = this.forms.get('careerHistoryList') as FormArray;
    formArray.push(this.createCareerHistory());
  }

  createConsultingHistory(): FormGroup {
    return this.formBuilder.group({
      startDate: '',
      endDate: '',
      projectName: '',
      position: ''
    });
  }

  addConsultingHistory() {
    let formArray = this.forms.get('consultingHistoryList') as FormArray;
    formArray.push(this.createConsultingHistory());
  }

  createTrainingHistory() {
    return this.formBuilder.group({
      date: '',
      trainingName: '',
      holderName: '',
      country: '',
      place: '',
      details: ''
    })
  }

  addTrainingHistory() {
    let formArray = this.forms.get('trainingHistoryList') as FormArray;
    formArray.push(this.createTrainingHistory());
  }

  createExpertise() {
    return this.formBuilder.group({
      ISCED1: '',
      ISCED2: '',
      ISCED3: '',
      exertise:''
    })
  }

  addExpertiseList() {
    let formArray = this.forms.get('expertiseList') as FormArray;
    formArray.push(this.createExpertise());
  }

  createReward() {
    return this.formBuilder.group({
      date: '',
      reward: '',
      accomplishment: '',
      giver: '',

    })
  }

  addRewardList() {
    let formArray = this.forms.get('rewardList') as FormArray;
    formArray.push(this.createReward());
  }

  createFinishedResearch() {
    return this.formBuilder.group({
      researchName: '',
      fund: '',
      position: '',
      contribution: '',
      endDate:''
    })
  }

  addFinishedResearchList() {
    let formArray = this.forms.get('finishedResearchList') as FormArray;
    formArray.push(this.createFinishedResearch());
  }*/


  clearFormArray = (formArray: FormArray) => {
    formArray = this.formBuilder.array([]);
  }

}
