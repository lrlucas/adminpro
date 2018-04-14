import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarService,SharedService,SettingsService,UsuarioService,LoginGuardGuard } from './service.index';
import { HttpClientModule } from "@angular/common/http";

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
    LoginGuardGuard
  ]
})
export class ServiceModule { }
