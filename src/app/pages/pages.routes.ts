import { Routes, RouterModule } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { AccoutSettingsComponent } from "./accout-settings/accout-settings.component";
import { PromesasComponent } from "./promesas/promesas.component";
import { RxjsComponent } from "./rxjs/rxjs.component";
import { LoginGuardGuard } from "../services/guards/login-guard.guard";
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from "./usuarios/usuarios.component";
import { HospitalesComponent } from "./hospitales/hospitales.component";
import { MedicosComponent } from "./medicos/medicos.component";
import { MedicoComponent } from "./medicos/medico.component";
import { BusquedaComponent } from "./busqueda/busqueda.component";
import { AdminGuard } from "../services/service.index";


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
      { path: 'perfil', component: ProfileComponent, data: {titulo: 'Perfil de usuario'} },
      { path: 'busqueda/:termino', component: BusquedaComponent, data: {titulo: 'Buscador'} },
      // Mantenimiento
        {
        path: 'usuarios',
        component: UsuariosComponent,
          canActivate: [ AdminGuard ],
        data: {titulo: 'Mantenimiento de Usuarios'}
        },
      { path: 'hospitales', component: HospitalesComponent, data: {titulo: 'Mantenimiento de Hospitales'} },
      { path: 'medicos', component: MedicosComponent, data: {titulo: 'Mantenimiento de Medicos'} },
      { path: 'medico/:id', component: MedicoComponent, data: {titulo: 'Actualizar Medico'} },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ]
  }

];

export const PAGES_ROUTES = RouterModule.forChild( PagesRoutes );
