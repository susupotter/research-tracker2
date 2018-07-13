import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { ResearchStatusActionDisplay } from '../../../../model/display/research-status-display';

@Component({
  selector: 'app-progress-detail',
  templateUrl: './progress-detail.component.html',
  styleUrls: ['./progress-detail.component.css']
})
export class ProgressDetailComponent implements OnInit {

  public currentTab: string;
  public closeResult: string;
  public researchStatus: string;
  public nextStatus: string;
  public modalTitle: string;
  public modalBtnAction: string;

  public researchStatusDisplayAccept: ResearchStatusActionDisplay;
  public researchStatusDisplayReject: ResearchStatusActionDisplay;

  public modalResearchStatusDisplay: ResearchStatusActionDisplay;

  



  constructor(private modalService: NgbModal, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.currentTab = "detail";
    this.activatedRoute.params.subscribe(params => {
      this.researchStatus = params['status']
      this.setResearchActionByResearchStatus()
    })
    
  }

  onChangeTab(tabName: string) {
    this.currentTab = tabName;
  }

  open(content, researchStatusDisplay: ResearchStatusActionDisplay) {
    this.nextStatus = researchStatusDisplay.nextStatus;
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
    if(this.researchStatus == 'waitForContract'){
      this.researchStatusDisplayAccept = ResearchStatusActionDisplay.waitForContract;
    }
 
    if(this.researchStatus == 'firstPayment'){
      this.researchStatusDisplayAccept = ResearchStatusActionDisplay.firstPayment;
    }
 
    if(this.researchStatus == 'waitForProgress' || this.researchStatus == 'progressSubmit'){
      this.researchStatusDisplayAccept = ResearchStatusActionDisplay.waitForProgress;
    }
 
    if(this.researchStatus == 'secondPayment'){
      this.researchStatusDisplayAccept = ResearchStatusActionDisplay.secondPayment;
    }
 
    if(this.researchStatus == 'waitForProjectFinished' || this.researchStatus == 'finalSubmit'){
      this.researchStatusDisplayAccept = ResearchStatusActionDisplay.waitForProjectFinished;
    }
 
    if(this.researchStatus == 'lastPayment'){
      this.researchStatusDisplayAccept = ResearchStatusActionDisplay.lastPayment;
    }
   
    this.researchStatusDisplayReject = ResearchStatusActionDisplay.rejectContract;
  }
 

}