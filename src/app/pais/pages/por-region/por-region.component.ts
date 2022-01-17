import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
      `
        button {

          margin-right: 5px;
        }
      `
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];


  paises: Country[] = [];

  regionActiva:string = '';

  constructor( private paisService: PaisService ) { }

  //  getCalseCss( region: string ): string{
  //    return  (region === this.regionActiva) ? 'btn btn-primary': 'btn btn-outline-primary' ;
  //  }

  // el subcribe es apra consumir el api

    activarRegion( region: string ){

      if (region === this.regionActiva) {
        return;
      }
      this.regionActiva = region;
      this.paises = [];
      this.paisService.buscarRegion(region)
          .subscribe( paises =>{
          this.paises = paises
          console.log(paises);
          
      })
    }
 
}
