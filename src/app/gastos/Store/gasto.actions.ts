import { createAction, props } from '@ngrx/store';
import { Gasto } from '../models/gasto.model';


export const cargarGastos = createAction(
  '[Gastos] Cargar Gastos'
);


export const agregarGasto = createAction(
  '[Gastos] Agregar Gasto', 
  props<{ gasto: Gasto }>()
);


export const editarGasto = createAction(
  '[Gastos] Editar Gasto', 
  props<{ gasto: Gasto }>()
);


export const borrarGasto = createAction(
  '[Gastos] Borrar Gasto', 
  props<{ id: number }>()
);