import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-published-works',
  templateUrl: './published-works.component.html',
  styleUrls: ['./published-works.component.css']
})
export class PublishedWorksComponent implements OnInit {

  public closeResult: string;
  constructor(private router: Router, private modalService: NgbModal) { }

  ngOnInit() {
  }

  goToCreatePortfolio(portType: String){
    this.router.navigateByUrl('/app/post-login/researcher/portfolio/create/' + portType);
  }

  openPopup(content){
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
      return  `with: ${reason}`;
    }
  }


}
