import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {URL_SERVICIOS} from "../../config/config";
import {UsuarioService} from "../usuario/usuario.service";
import {Medico} from "../../models/medico.model";

@Injectable()
export class MedicoService {

  total_medicos: number = 0;

  constructor(public http: HttpClient, public _usuarioService: UsuarioService) { }


  cargar_medicos() {
    let url = `${URL_SERVICIOS}/medico`;
    return this.http.get(url)
      .map( (resp: any) => {
        this.total_medicos = resp.total;
        return resp.medicos;
      })

  }



  buscarMedicos(termino:string) {
    let url = URL_SERVICIOS + '/busqueda/coleccion/medicos/'+termino;
    return this.http.get(url)
      .map((resp:any) => resp.medicos)
  }


  borrar_medico(id: string) {
    let url = `${URL_SERVICIOS}/medico/${id}?token=${this._usuarioService.token}`;
    return this.http.delete(url)
      .map((resp) => {
        swal('Medico Borrado','Medico Borrado Correctamente', 'success');
        return resp;
      })
  }


  guardarMedico(medico: Medico) {

    if (medico._id) {
      // actualizando
      let url = `${URL_SERVICIOS}/medico/${medico._id}?token=${this._usuarioService.token }`;

      return this.http.put(url, medico)
        .map((resp: any) => {
          swal('Medico Actualizado', medico.nombre, 'success');
          return resp.medico;
        });

    } else {
      // creando
      let url = `${URL_SERVICIOS}/medico?token=${this._usuarioService.token }`;
      return this.http.post(url, medico)
        .map((resp: any) => {
          swal('Medico Creado', medico.nombre, 'success');
          return resp.medico;
        });
    }



  }


  cargar_medico(id: string) {
    let url = `${URL_SERVICIOS}/medico/${id}`;
    return this.http.get(url)
      .map( (resp: any) => {
        return resp.medico;
      })
  }



}
