import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ResearchStatusActionDisplay } from '../../../model/display/research-status-display';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-progress',
  templateUrl: './update-progress.component.html',
  styleUrls: ['./update-progress.component.css']
})
export class UpdateProgressComponent implements OnInit {

  public modalTitle: string;
  public researchStatus: string;
  public closeResult: string;
  public modalBtnAction: string;
  public currentTab: string;

  public researchStatusDisplay: ResearchStatusActionDisplay;


  constructor(private modalService: NgbModal, private activatedRoute: ActivatedRoute, private route: Router) { }

  ngOnInit() {
    this.currentTab = "detail";
    this.activatedRoute.params.subscribe(params => {
      this.researchStatus = params['status']
      //console.log("researchStatus" + this.researchStatus)
      this.setResearchActionByResearchStatus()
    })
  }

  onSubmitFinal() {
    this.route.navigateByUrl('/app/post-login/researcher/submitFinal');
  }

  onChangeTab(tabName: string) {
    this.currentTab = tabName;
  }

  open(content, researchStatusDisplay: ResearchStatusActionDisplay) {
    this.modalTitle = researchStatusDisplay.statusActionTitle;
    this.modalBtnAction = researchStatusDisplay.nextActionLabel;
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
      return `with: ${reason}`;
    }
  }

  public setResearchActionByResearchStatus() {


    if (this.researchStatus == 'waitForProgress') {
      this.researchStatusDisplay = ResearchStatusActionDisplay.waitForProgressResearcher;
    }

    if (this.researchStatus == 'waitForProjectFinished') {
      this.researchStatusDisplay = ResearchStatusActionDisplay.waitForProjectFinishedResearcher;
    }

    if (this.researchStatus == 'projectFinished') {
      //this.researchStatusDisplay = this.projectFinished;
    }

  }

}
