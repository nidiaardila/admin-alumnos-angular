import { Pipe, PipeTransform } from '@angular/core';
import { Alumno } from '../interfaces/alumno';

@Pipe({
  name: 'nombreCompleto'
})
export class NombreCompletoPipe implements PipeTransform {

  transform(nombreCompleto: Alumno): string {
    return nombreCompleto.nombre + ' ' + nombreCompleto.apellido;
  }

}
