import { Routes, RouterModule } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { AccoutSettingsComponent } from "./accout-settings/accout-settings.component";
import { PromesasComponent } from "./promesas/promesas.component";
import { RxjsComponent } from "./rxjs/rxjs.component";
import { LoginGuardGuard } from "../services/guards/login-guard.guard";


const PagesRoutes:Routes = [

  {
    path: '',
    component: PagesComponent,
    canActivate:[ LoginGuardGuard ],
    children: [
      { path: 'dashboard', component: DashboardComponent, data: {titulo: 'Dashboar'} },
      { path: 'progress', component: ProgressComponent, data: {titulo: 'Progressbars'} },
      { path: 'graficas1', component: Graficas1Component, data: {titulo: 'Graficas'} },
      { path: 'promesas', component: PromesasComponent, data: {titulo: 'Promesas'} },
      { path: 'RXJS', component: RxjsComponent, data: {titulo: 'RxJs'} },
      { path: 'account-settings', component: AccoutSettingsComponent, data: {titulo: 'Ajustes de Tema'} },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ]
  }

];

export const PAGES_ROUTES = RouterModule.forChild( PagesRoutes );
