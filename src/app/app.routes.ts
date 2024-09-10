import { Routes } from '@angular/router';
import { TransferenciaAgendarComponent } from './transferencia-agendar/transferencia-agendar.component';
import { TransferenciaExtratoComponent } from './transferencia-extrato/transferencia-extrato.component';

export const routes: Routes = [
    { path: 'agendar', component: TransferenciaAgendarComponent },
    { path: 'extrato', component: TransferenciaExtratoComponent },
    { path: '', redirectTo: '/agendar', pathMatch: 'full' }
  ];
