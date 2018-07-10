
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// router
import {APP_ROUTES} from './app.routes';

// modulos
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

// Servicios
import { ServiceModule } from "./services/service.module";
import {PagesComponent} from "./pages/pages.component";
import {SharedModule} from "./shared/shared.module";




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    FormsModule,
    ReactiveFormsModule,
    ServiceModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
