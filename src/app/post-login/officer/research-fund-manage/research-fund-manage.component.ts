import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-research-fund-manage',
  templateUrl: './research-fund-manage.component.html',
  styleUrls: ['./research-fund-manage.component.css']
})
export class ResearchFundManageComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  goToAddFund(){
    this.route.navigateByUrl('/app/post-login/officer/researchFundManage/detail');
  }

  goToEditFund(id){
    this.route.navigateByUrl('/app/post-login/officer/researchFundManage/detail/' + id);
  }



}
