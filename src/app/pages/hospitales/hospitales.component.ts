import { Component, OnInit } from '@angular/core';
import {Hospital} from "../../models/hospital.model";
import {HospitalService} from "../../services/service.index";
import {ModalUploadService} from "../../component/modal-upload/modal-upload.service";
declare var swal: any;

@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styles: []
})
export class HospitalesComponent implements OnInit {

  hospitales: Hospital[] = [];

  constructor(public _hospitalService: HospitalService, public _modalUploadService: ModalUploadService) { }

  ngOnInit() {
    this.cargar_hospitales();
    this._modalUploadService.notificacion
      .subscribe(() => {
        this.cargar_hospitales();
      })
  }

  cargar_hospitales() {
    this._hospitalService.cargar_hospitales()
      .subscribe( hospitales => {
        this.hospitales = hospitales;
      })
  }

  guardarHospital(hospital: Hospital) {

    this._hospitalService.actualizar_hospital(hospital)
      .subscribe( () => {});

  }

  borrarHospital(hospital: Hospital) {

    this._hospitalService.borrar_hospital(hospital._id)
      .subscribe( () => {
         this.cargar_hospitales()
      });

  }


  buscarHospital(termino: string) {

    if (termino.length <= 0) {
      this.cargar_hospitales();
      return;
    }
    this._hospitalService.buscar_hospital(termino)
      .subscribe( hospitales => {

        this.hospitales = hospitales

      })
  }




  crearHospital() {
    swal({
      title: 'Crear Hospital',
      text: 'Ingrese el nombre del hospital',
      content: 'input',
      icon: 'info',
      buttons: true,
      dangerMode: true
    }).then(( valor: string ) => {
      if (!valor || valor.length === 0) {
        return;
      }

      this._hospitalService.crear_hospital(valor)
        .subscribe(()=> this.cargar_hospitales());

    })
  }



  actualizarImagen(hospital: Hospital) {

    this._modalUploadService.mostrarModal('hospitales', hospital._id)

  }
}
