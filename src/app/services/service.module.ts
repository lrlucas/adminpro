import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { ModalUploadService } from "../component/modal-upload/modal-upload.service";
import {
  SidebarService, SharedService,
  SettingsService, UsuarioService,
  LoginGuardGuard, SubirArchivoService,
  HospitalService, MedicoService, AdminGuard, VerificaTokenGuard
} from './service.index';

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
    ModalUploadService,
    HospitalService,
    MedicoService,
    AdminGuard,
    VerificaTokenGuard
  ]
})
export class ServiceModule { }
