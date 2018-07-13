import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PreLoginComponent } from "./pre-login.component";
import { RegistrationComponent } from "./registration/registration.component";
import { RegistrationPublicComponent } from "./registration-public/registration-public.component";


const routes: Routes = [
    {
        path: '', component: PreLoginComponent, children: [
            { path: '', component: PreLoginComponent, pathMatch: 'full' }]
    },
    { path: 'registration', component: RegistrationComponent, children:[
        { path: 'registration', component: RegistrationComponent, pathMatch: 'full' }
    ] },
    { path: 'registrationPublic', component: RegistrationPublicComponent, children:[
        { path: 'registrationPublic', component: RegistrationPublicComponent, pathMatch: 'full' }
    ] },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []

})
export class PreLoginRoutingModule { }