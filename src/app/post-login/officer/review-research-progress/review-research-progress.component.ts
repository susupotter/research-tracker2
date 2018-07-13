import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review-research-progress',
  templateUrl: './review-research-progress.component.html',
  styleUrls: ['./review-research-progress.component.css']
})
export class ReviewResearchProgressComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  goToProgresslDetail(status?: string){
    this.route.navigateByUrl('/app/post-login/officer/researchProgress/detail/' + status)
  }

}
