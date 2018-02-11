import { Component, OnInit } from '@angular/core';
import {CommentStmt} from "@angular/compiler";
import {promise} from "selenium-webdriver";

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  promess:number;
  alert:boolean;

  constructor() {



    this.contarTres()
      .then((ok)=> {
        this.alert = ok;
      console.log('termino',ok);
    })
      .catch((error)=>{
      console.error('Error en la promesa ',error);
    })




  }

  ngOnInit() {
  }


  contarTres():Promise<boolean> {

    return new Promise( (resolve, reject)=> {

      let contador = 0;

      let intervalo = setInterval(() => {

        contador += 1;
        console.log(contador)
        this.promess = contador;
        if (contador === 3) {


          resolve(true);
          // reject('Simple error de consola');
          clearInterval(intervalo);

        }
      }, 1000);

    });


  }

}
