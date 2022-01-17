import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

// tap es un operador que dispara un efecto secundario

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  // confia en mi yo se lo que estoy haciendo: !
  pais: any;

  constructor( private activatedRoute: ActivatedRoute , private paisService: PaisService  ) { }

  ngOnInit( ): void {

    // this.activatedRoute.params.subscribe( ({id}) => { console.log(id);

    // this.paisService.getPaisPorAlpha(id).subscribe( pais => { console.log(pais); })
    // })

    this.activatedRoute.params
          .pipe(
              switchMap( ({id}) => this.paisService.getPaisPorAlpha( id ))
          )
          .subscribe( pais => {
            this.pais = pais;
            console.log(this.pais[0]); 
          });

  }

}
