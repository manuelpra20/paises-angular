import { Component, EventEmitter, Output,OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-imput',
  templateUrl: './pais-imput.component.html',
  styles: [
  ]
})
export class PaisImputComponent implements OnInit {


  @Output() onEnter    : EventEmitter<string> = new EventEmitter();

  //  onDebounce se va a emitir cuando la persona deja de escribir
  @Output() onDebounce : EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject();;
  

  termino: string = '';

  ngOnInit(){
    this.debouncer
        .pipe(debounceTime(300))
        .subscribe( valor => {
      console.log('debouncer:', valor);
      this.onDebounce.emit(valor);
      
    } )
  }

  buscar(){
    this.onEnter.emit( this.termino );
  }

  // metodo para que salñga ra´pido sugerencia
  teclaPrecionada(event: any){
    this.debouncer.next(this.termino);
  }

  
  

}
