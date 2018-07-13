import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'app'
        , loadChildren: './template/template.module#TemplateModule'
    }, 
    { path: 'login'
        ,loadChildren: './pre-login/pre-login.module#PreLoginModule'
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
  })
export class AppRoutingModule { }