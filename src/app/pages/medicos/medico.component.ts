import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {Hospital} from "../../models/hospital.model";
import {HospitalService, MedicoService} from "../../services/service.index";
import {Medico} from "../../models/medico.model";
import {Router, ActivatedRoute} from "@angular/router";
import {ModalUploadService} from "../../component/modal-upload/modal-upload.service";

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styles: []
})
export class MedicoComponent implements OnInit {

  hospitales: Hospital[] = [];

  medico: Medico = new Medico('', '', '', '', '');
  hospital: Hospital = new Hospital('', '', '');

  constructor(public _medicoService: MedicoService,
              public _hospitalService: HospitalService,
              public router: Router,
              public activatedRoute: ActivatedRoute,
              public _modalUploadService: ModalUploadService) {

    activatedRoute.params.subscribe( params => {
      let id = params['id'];

      if (id !== 'nuevo') {
        this.cargar_medico(id);
      }
    });

  }

  ngOnInit() {

    this._hospitalService.cargar_hospitales()
      .subscribe( hospitales => this.hospitales = hospitales );

    this._modalUploadService.notificacion
      .subscribe((resp: any) => {
        this.medico.img = resp.medico.img;
      })

  }

  guardarMedico(formulario: NgForm) {
    if (formulario.invalid) {
      return;
    }
    this._medicoService.guardarMedico(this.medico)
      .subscribe( medico => {
        this.medico._id = medico._id;
        this.router.navigate(['/medico', medico._id])
      })

  }
  cambioHospital(id: string) {
    this._hospitalService.obtener_hospital(id)
      .subscribe( hospital => {
        this.hospital = hospital;
      });
  }

  cargar_medico(id: string) {
    this._medicoService.cargar_medico(id)
      .subscribe(medico => {
        this.medico = medico;
        this.medico.hospital = medico.hospital._id;
        this.cambioHospital(this.medico.hospital);
      })
  }

  cambiarFoto() {
    this._modalUploadService.mostrarModal('medicos', this.medico._id);
  }







}
