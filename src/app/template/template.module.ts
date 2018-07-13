import { LayoutRoutingModule } from './template-routing.module';
import { FooterComponent } from './footer/footer.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { TemplateComponent } from './template.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { IndexComponent } from './index/index.component';

@NgModule({
    imports: [
      LayoutRoutingModule,
      CommonModule
    ],
    declarations: [TemplateComponent, HeaderComponent, SideMenuComponent, FooterComponent, IndexComponent]
  })
  export class TemplateModule { }