import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-portfolio',
  templateUrl: './create-portfolio.component.html',
  styleUrls: ['./create-portfolio.component.css']
})
export class CreatePortfolioComponent implements OnInit {

  public forms: FormGroup;
  public portType: String;
  public title: String;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.forms = this.formBuilder.group({
      
    })

    this.activatedRoute.params.subscribe(params => {
      this.portType = params['portType']
      //console.log("researchStatus" + this.researchStatus)
      this.setPortToBeCreateByPortType()
    })
    
  }

  setPortToBeCreateByPortType(){
    if(this.portType == 'project'){
      this.title = "งานวิจัยฉบับสมบูรณ์ / วิทยานิพนธ์"
      this.showProjectForm();
    } else if(this.portType == 'conference'){
      this.title = "รายงานการประชุมวิชาการ"
      this.showConferenceForm();
    } else if(this.portType == 'article'){
      this.title = "วารสารทางวิชาการ / บทความวิชาการ"
      this.showArticleForm()
    }
  }

  showProjectForm(){

  }


  showArticleForm(){

  }

  showConferenceForm(){
    
  }

}
