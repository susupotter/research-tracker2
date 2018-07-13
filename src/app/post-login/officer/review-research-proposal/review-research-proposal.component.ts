import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review-research-proposal',
  templateUrl: './review-research-proposal.component.html',
  styleUrls: ['./review-research-proposal.component.css']
})
export class ReviewResearchProposalComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  goToProposalDetail(){
    this.route.navigateByUrl('/app/post-login/officer/researchProposal/detail')
  }

}
