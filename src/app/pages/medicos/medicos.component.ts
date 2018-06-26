import { Component, OnInit } from '@angular/core';
import {Medico} from "../../models/medico.model";
import {MedicoService} from "../../services/service.index";

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styles: []
})
export class MedicosComponent implements OnInit {

  medicos: Medico[] = [];

  constructor(public _medicoService: MedicoService) { }

  ngOnInit() {
    this.cargar_medicos();
  }


  buscarMedico(termino: string) {

    if (termino.length <= 0) {
      this.cargar_medicos();
      return;
    }
    this._medicoService.buscarMedicos(termino)
      .subscribe(medicos => {
        this.medicos = medicos;
      })
  }

  cargar_medicos() {
    this._medicoService.cargar_medicos()
      .subscribe( medicos => {
        this.medicos = medicos;
      })
  }

  borrarMedico(medico: Medico) {
    this._medicoService.borrar_medico(medico._id)
      .subscribe(resp => {
        this.cargar_medicos();
      });
  }

}
