import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UsuarioService } from "../usuario/usuario.service";

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(public _usuarioService: UsuarioService) {

  }
  canActivate() {

    if (this._usuarioService.usuario.role === 'ADMIN_ROLE') {
      return true;
    } else {
      console.log('Bloqueado por el ADMIN GUARD')
      // this.router.navigate(['/login'])
      this._usuarioService.logOut();
      return false;
    }
  }
}
