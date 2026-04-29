import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gasto } from '../models/gasto.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GastoService {
  
  private http = inject(HttpClient);
  private base = environment.apiBaseUrl;
  private ep = environment.endpoints;

  constructor() { }


  obtenerGastos(): Observable<Gasto[]> {
    return this.http.get<Gasto[]>(`${this.base}${this.ep.expenses}`);
  }

  agregarGasto(nuevoGasto: Gasto): Observable<Gasto> {
    return this.http.post<Gasto>(`${this.base}${this.ep.expensesAdd}`, nuevoGasto);
  }

  actualizarGasto(id: number, gastoActualizado: Gasto): Observable<Gasto> {
    return this.http.put<Gasto>(`${this.base}${this.ep.expensesUpdate(id)}`, gastoActualizado);
  }

  eliminarGasto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.base}${this.ep.expensesDelete(id)}`);
  }
}