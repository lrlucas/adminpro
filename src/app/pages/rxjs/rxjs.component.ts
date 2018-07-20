import {Component, OnDestroy, OnInit} from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";
import "rxjs/add/operator/retry";
import "rxjs/add/operator/map";
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {

    this.subscription = this.regresaObservable()
      .subscribe(
        numero => console.log(`Subscripcion ${ numero }` ),
        error => console.log('Error en el observador ' + error),
        ()=> console.log('El observador termino!')
      )


  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  regresaObservable():Observable<any> {

    return new Observable( observer => {

      let contador = 0;

      let intervalo = setInterval( ()=> {

        contador += 1;
        let salida = {
          valor: contador
        };

        // next lo que hace es que notifica el observable cada ves que sucede un evento
        observer.next(salida);
        // if( contador === 3 ) {
        //   // clearInterval termina la ejecucion de lo que se esta ejecutandp
        //   clearInterval(intervalo);
        //   // La funcion complete lo que hace es que cancela la observacion del lo que queremos mostrar
        //   observer.complete();
        // }
        // if ( contador === 2 ) {
        //   clearInterval(intervalo);
        //   observer.error('Auxilio!')
        // }



      },500)

    })
      .retry(2)
      .map((res:any) => {
        return res.valor;
      })
      .filter((valor,index) => {
        if(valor % 2 === 1) {
          // Impar
          return true
        } else {
          // Par
          return false
        }
      })

  }

}