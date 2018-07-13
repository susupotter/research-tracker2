import { Component, OnInit } from '@angular/core';
import { RadioValue } from '../../../../component/radio-field/radio-value';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-proposal-detail',
  templateUrl: './proposal-detail.component.html',
  styleUrls: ['./proposal-detail.component.css']
})
export class ProposalDetailComponent implements OnInit {

  public currentTab: string;
  public closeResult: string;
  public researchStatus: string;
  public modalTitle: string;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    this.currentTab = "detail";
  }

  onChangeTab(tabName: string){
    this.currentTab = tabName;
  }

  open(content, researchStatus, title) {
    this.researchStatus = researchStatus;
    this.modalTitle = title;
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

}
