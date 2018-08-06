import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-researcher-portfolio',
  templateUrl: './researcher-portfolio.component.html',
  styleUrls: ['./researcher-portfolio.component.css', '../../../style/form-style.css']
})
export class ResearcherPortfolioComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToCreatePortfolio(portType: String){
    this.router.navigateByUrl('/app/post-login/researcher/portfolio/create/' + portType);
  }

}
