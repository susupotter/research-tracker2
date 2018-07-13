import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ResearchStatusActionDisplay } from '../../../model/display/research-status-display';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public modalTitle:string;
  public researchStatus:string;
  public closeResult: string;
  public modalBtnAction: string;
  public hasPopup: boolean;

  @ViewChild('announcement') announcementPopup: ElementRef;

  constructor(private router: Router, private modalService: NgbModal) { }

  ngOnInit() {
    this.popupAnnouncement(this.announcementPopup);
  }

  goToProposeResearch() {
    this.router.navigateByUrl('/app/post-login/researcher/proposal');
  }
  goToDetail(status) {
    this.router.navigateByUrl('/app/post-login/researcher/detail/' + status);
  }

  open(content, researchStatus: string) {
    let researchStatusDisplay = this.getResearchActionByResearchStatus(researchStatus)
    this.researchStatus = researchStatus;
    this.modalTitle = researchStatusDisplay.statusActionTitle;
    this.modalBtnAction = researchStatusDisplay.nextActionLabel;
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'}).result.then((result) => {
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
      return  `with: ${reason}`;
    }
  }

  popupAnnouncement(announcement){
    if(!this.hasPopup){
      this.hasPopup = true;
      this.modalService.open(announcement, {backdropClass: 'light-blue-backdrop'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
    
  }

  public getResearchActionByResearchStatus(researchStatus: String) {


    if(researchStatus == 'waitForProgress'){
      return ResearchStatusActionDisplay.waitForProgressResearcher;
    }

    if(researchStatus == 'waitForProjectFinished'){
      return ResearchStatusActionDisplay.waitForProjectFinishedResearcher;
    }

    if(researchStatus == 'projectFinished'){
      return ResearchStatusActionDisplay.waitForProjectFinished;
      //this.researchStatusDisplay = this.projectFinished;
    }
    
  }

}
