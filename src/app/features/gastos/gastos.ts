import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { Gasto } from './models/gasto.model';
import { GastoService } from './services/gasto'; 

@Component({
  selector: 'app-gastos',
  imports: [CommonModule, FormsModule], 
  templateUrl: './gastos.html',
  styleUrl: './gastos.css',
})
export class Gastos implements OnInit {
  listaDeGastos: Gasto[] = [];
  mostrarModal: boolean = false;
  // 1. Cambiamos las variables aquí
  nuevoGasto: any = { description: '', amount: 0 };
  gastoEditandoId: number | null = null; 

  constructor(private gastoService: GastoService) { }

  ngOnInit(): void {
    this.refrescarLista();
  }

  refrescarLista() {
    this.gastoService.obtenerGastos().subscribe({
      next: (datos) => this.listaDeGastos = datos,
      error: (error) => console.error('Error al traer gastos:', error)
    });
  }

  abrirFormularioCrear() {
    this.gastoEditandoId = null;
    // 2. Y también aquí
    this.nuevoGasto = { description: '', amount: 0 }; 
    this.mostrarModal = true; 
  }

  cerrarModal() {
    this.mostrarModal = false; 
    this.gastoEditandoId = null;
  }

  guardarGasto() {
    if (this.gastoEditandoId) {
      const gastoEditado: Gasto = {
        id: this.gastoEditandoId,
        description: this.nuevoGasto.description,
        amount: this.nuevoGasto.amount,
        date: new Date().toISOString()
      };
      
      this.gastoService.actualizarGasto(this.gastoEditandoId, gastoEditado).subscribe({
        next: () => { this.refrescarLista(); this.cerrarModal(); },
        error: (err) => console.error('Error al actualizar:', err)
      });
    } else {
      const gastoParaGuardar: Gasto = {
        id: 0,
        description: this.nuevoGasto.description,
        amount: this.nuevoGasto.amount,
        date: new Date().toISOString() 
      };

      this.gastoService.agregarGasto(gastoParaGuardar).subscribe({
        next: () => { this.refrescarLista(); this.cerrarModal(); },
        error: (err) => console.error('Error al crear:', err)
      });
    }
  }

  actualizarGasto(gasto: Gasto) {
    this.gastoEditandoId = gasto.id;
    this.nuevoGasto = {
      description: gasto.description,
      amount: gasto.amount
    };
    this.mostrarModal = true;
  }

  borrarGasto(id: number) {
    this.gastoService.eliminarGasto(id).subscribe({
      next: () => this.refrescarLista(),
      error: (err) => console.error('Error al borrar:', err)
    });
  }
}