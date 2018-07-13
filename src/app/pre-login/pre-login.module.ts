import { NgModule } from "@angular/core";
import { PreLoginComponent } from "./pre-login.component";
import { RegistrationComponent } from "./registration/registration.component";
import { PreLoginRoutingModule } from "./pre-login-routing.module";
import { ComponentModule } from "../component/component.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { CommonModule } from "@angular/common";
import { RegistrationPublicComponent } from './registration-public/registration-public.component';
import { ReactiveFormsModule } from "@angular/forms";
import { APIServiceModule } from "../api-service/api.service.module";

@NgModule({
  imports: [
    PreLoginRoutingModule,
    ComponentModule,
    NgbModule,
    AngularFontAwesomeModule,
    CommonModule,
    ReactiveFormsModule,
    APIServiceModule
  ],
  declarations: [PreLoginComponent, RegistrationComponent, RegistrationPublicComponent]
})
export class PreLoginModule { }