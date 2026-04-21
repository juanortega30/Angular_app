import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';  
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { gastoReducer } from './gastos/Store/gasto.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore({gastos : gastoReducer}),
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient() 
  ]
};