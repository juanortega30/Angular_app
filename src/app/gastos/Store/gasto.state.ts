import { Gasto } from '../models/gasto.model';


export interface GastoState {
  gastos: Gasto[];
  cargando: boolean; 
  error: string | null;
}

export const estadoInicial: GastoState = {
  gastos: [],
  cargando: false,
  error: null
};