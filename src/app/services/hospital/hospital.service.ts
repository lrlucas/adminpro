import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { URL_SERVICIOS } from "../../config/config";
import { UsuarioService } from "../usuario/usuario.service";
import { Hospital } from "../../models/hospital.model";


@Injectable()
export class HospitalService {

  total_hospitales: number = 0;

  constructor(public http:HttpClient, public _usuarioService: UsuarioService) {



  }

  cargar_hospitales() {
    let url = `${URL_SERVICIOS}/hospital`;
    return this.http.get(url)
      .map( (resp: any) => {
        this.total_hospitales = resp.total;
        return resp.hospitales;
      });
  }

  obtener_hospital(id: string) {
    let url = `${URL_SERVICIOS}/hospital/${id}`;
    return this.http.get(url)
      .map( ( resp: any ) => resp.hospital )
  }

  borrar_hospital( id: string ) {
    let url = `${URL_SERVICIOS}/hospital/${id}/?token=${this._usuarioService.token}`;
    return this.http.delete(url)
      .map( resp => swal('Hospital Borrado', 'Eliminado Corectamente', 'success') );

  }

  crear_hospital(nombre: string) {
    let url = `${URL_SERVICIOS}/hospital/?token=${this._usuarioService.token}`;
    return this.http.post(url, { nombre: nombre })
      .map( (resp: any) => {
        return resp.hospital;
      })
  }

  buscar_hospital(termino: string) {
    let url = `${URL_SERVICIOS}/busqueda/coleccion/hospitales/${termino}`;
    return this.http.get(url)
      .map((resp: any) => {
        return resp.hospitales;
      })
  }


  actualizar_hospital(hospital: Hospital) {
    let url = `${URL_SERVICIOS}/hospital/${hospital._id}?token=${this._usuarioService.token}`
    return this.http.put(url, hospital)
      .map( (resp: any) => {
        swal('Hospital Actualizado', hospital.nombre, 'success');
        return resp.hospital
      });
  }



}
