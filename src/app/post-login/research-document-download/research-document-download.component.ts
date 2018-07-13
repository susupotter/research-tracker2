import { Component, OnInit, Input } from '@angular/core';
import { ResearchStatusConst } from '../../model/const/research-status-const';

@Component({
  selector: 'app-research-document-download',
  templateUrl: './research-document-download.component.html',
  styleUrls: ['./research-document-download.component.css']
})
export class ResearchDocumentDownloadComponent implements OnInit {

  @Input() status: String = '';
  activeId: String="fullResearch";

  constructor() { }

  ngOnInit() {
  }

  /*getActiveId(){
    return this.activeId;
  }*/

  getActiveId(){
    if(this.shouldShowFullResearch()){
      return "fullResearch";
    } else if(this.shouldShowProgressReport()){
      return "progressReport";
    } else {
      return "proposal"
    }

  }

  shouldShowFullResearch(){
    let researchStatusOrder = ResearchStatusConst.getResearchStatusOrder(this.status)
    if(researchStatusOrder > ResearchStatusConst.waitForProjectFinished.order){
      return true;
    }

    return false;
  }

  shouldShowProgressReport(){
    let researchStatusOrder = ResearchStatusConst.getResearchStatusOrder(this.status)
    if(researchStatusOrder > ResearchStatusConst.waitForProgress.order){
      return true;
    }
    return false;
  }

  /*
  if(this.researchStatus == 'waitForContract'){
      this.researchStatusDisplayAccept = ResearchStatusActionDisplay.waitForContract;
    }

    if(this.researchStatus == 'firstPayment'){
      this.researchStatusDisplayAccept = ResearchStatusActionDisplay.firstPayment;
    }

    if(this.researchStatus == 'waitForProgress'){
      this.researchStatusDisplayAccept = ResearchStatusActionDisplay.waitForProgress;
    }

    if(this.researchStatus == 'secondPayment'){
      this.researchStatusDisplayAccept = ResearchStatusActionDisplay.secondPayment;
    }

    if(this.researchStatus == 'waitForProjectFinished'){
      this.researchStatusDisplayAccept = ResearchStatusActionDisplay.waitForProjectFinished;
    }

    if(this.researchStatus == 'projectFinished'){
      //this.researchStatusDisplayAccept = this.projectFinished;
    }

  */

}
