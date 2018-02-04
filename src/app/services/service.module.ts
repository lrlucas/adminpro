import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarService,SharedService,SettingsService } from './service.index';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers:[
    SidebarService,
    SharedService,
    SettingsService
  ]
})
export class ServiceModule { }
