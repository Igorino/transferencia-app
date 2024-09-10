import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Transferencia {
  contaOrigem: string;
  contaDestino: string;
  valor: number;
  dataTransferencia: string;
  taxa?: number;
  dataAgendamento?: string;
}

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private apiUrl = 'http://localhost:8080/transferencias';  // URL do back-end

  constructor(private http: HttpClient) {}

  agendarTransferencia(transferencia: Transferencia): Observable<Transferencia> {
    return this.http.post<Transferencia>(`${this.apiUrl}`, transferencia);
  }

  listarTransferencias(): Observable<Transferencia[]> {
    return this.http.get<Transferencia[]>(`${this.apiUrl}`);
  }
}