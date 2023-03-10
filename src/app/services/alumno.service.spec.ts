import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AlumnoService } from './alumno.service';
import { of } from 'rxjs';
import { Alumno } from '../interfaces/alumno';

describe('AlumnoService', () => {
  let service: AlumnoService;
  let httpClientSpy: { get: jasmine.Spy }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new AlumnoService(httpClientSpy as any);
  });

  it('El componente AlumnoService se ha creado correctamented', () => {
    expect(service).toBeTruthy();
  });

  it("El servicio retorna un arreglo de Alumnos de datos mockeados", (done: DoneFn)=>{
    let fechaPrueba = new Date()
    const mockDatos: Alumno[] = [
        {
         "cod": 1145,
         "nombre": "Juan",
         "apellido": "Luna",
         "estatus": "Activo",
         "id": "23"
        },
        {
         "cod": 789,
         "nombre": "Maria",
         "apellido": "Lopez",
         "estatus": "Activo",
         "id": "25"
        },
        {
         "cod": 1210,
         "nombre": "Jose",
         "apellido": "Lopez",
         "estatus": "Activo",
         "id": "27"
        },
        {
         "cod": 1134,
         "nombre": "Jorge",
         "apellido": "Miel",
         "estatus": "Activo",
         "id": "29"
        },
        {
         "cod": 2568,
         "nombre": "Antonella",
         "apellido": "Jaimes",
         "estatus": "Activo",
         "id": "30"
        }
       ];

     httpClientSpy.get.and.returnValue(of(mockDatos));

     service.getAlumnos().subscribe((alumnos: Alumno[]) => {
       expect(alumnos).toEqual(mockDatos);
       done();
     });
  })
});