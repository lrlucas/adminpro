import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarService,SharedService,SettingsService,UsuarioService,LoginGuardGuard,SubirArchivoService } from './service.index';
import { HttpClientModule } from "@angular/common/http";
import { ModalUploadService } from "../component/modal-upload/modal-upload.service";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers:[
    SidebarService,
    SharedService,
    SettingsService,
    UsuarioService,
    LoginGuardGuard,
    SubirArchivoService,
    ModalUploadService
  ]
})
export class ServiceModule { }
