import { createAction, props } from '@ngrx/store';
import { Sesion } from 'src/app/interfaces/sesion'


export const cargarSesion = createAction(
  '[Auth] Sesion cargada',
  props<{ sesion: Sesion }>()
);