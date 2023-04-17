import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Curso } from 'src/app/interfaces/curso';
import { CursosService } from 'src/app/services/cursos.service';
import { cargarCursoState } from 'src/app/state/curso-state.actions';
import { CursoState } from 'src/app/state/curso-state.reducer';

@Component({
  selector: 'app-cursos-inicio',
  templateUrl: './cursos-inicio.component.html',
  styleUrls: ['./cursos-inicio.component.css']
})
export class CursosInicioComponent {
  constructor(
    private store: Store<CursoState>
  ){}
  
  ngOnInit(){
    this.store.dispatch(cargarCursoState());
  }
}
