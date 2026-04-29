import { createReducer, on } from '@ngrx/store';
import { Gasto } from '../models/gasto.model';
import * as GastoActions from './gasto.actions';


export interface GastoState {
  gastos: Gasto[];
}


export const estadoInicial: GastoState = {
  gastos: []
};


export const gastoReducer = createReducer(
  estadoInicial,

  on(GastoActions.agregarGasto, (estado, { gasto }) => {
    return {
      ...estado, 
      gastos: [...estado.gastos, gasto] 
    };
  }),

  
  on(GastoActions.borrarGasto, (estado, { id }) => {
    return {
      ...estado,
      gastos: estado.gastos.filter(g => g.id !== id) 
    };
  }),

  
  on(GastoActions.editarGasto, (estado, { gasto }) => {
    return {
      ...estado,
      gastos: estado.gastos.map(g => g.id === gasto.id ? gasto : g)
    };
  })
);