import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GastoState } from './gasto.state';

export const seleccionarGastoState = createFeatureSelector<GastoState>('gastos');

export const seleccionarListaGastos = createSelector(
  seleccionarGastoState,
  (state: GastoState) => state.gastos
);

export const seleccionarCargando = createSelector(
  seleccionarGastoState,
  (state: GastoState) => state.cargando
);