import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { BreadcrumbsComponent } from "./breadcrumbs/breadcrumbs.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { HeaderComponent } from "./header/header.component";
import { NopagefoundComponent } from "../pages/nopagefound/nopagefound.component";
import { PipesModule } from '../pipes/pipes.module';
import {ModalUploadComponent} from "../component/modal-upload/modal-upload.component";





@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    PipesModule
  ],
  declarations:[
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    NopagefoundComponent,
    ModalUploadComponent

  ],
  exports:[
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    NopagefoundComponent,
    ModalUploadComponent
  ]
})

export class SharedModule {}
