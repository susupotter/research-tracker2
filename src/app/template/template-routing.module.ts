import { TemplateComponent } from './template.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';


const routes: Routes = [
    { path: '', component: TemplateComponent, children: [
        { path: '', component: IndexComponent, pathMatch: 'full' },
        { path: 'post-login/admin', loadChildren: '../post-login/admin/admin.module#AdminModule' },
        { path: 'post-login/officer', loadChildren: '../post-login/officer/officer.module#OfficerModule' },
        { path: 'post-login/researcher', loadChildren: '../post-login/researcher/researcher.module#ResearcherModule' },
    ]}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
  
  })
  export class LayoutRoutingModule { }