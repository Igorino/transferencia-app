import { Component, OnInit } from '@angular/core';
import { TransferenciaService, Transferencia } from '../service/transferencia.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-transferencia-extrato',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './transferencia-extrato.component.html',
  styleUrl: './transferencia-extrato.component.scss',
  providers: [TransferenciaService]
})
export class TransferenciaExtratoComponent implements OnInit {
  transferencias: Transferencia[] = [];

  constructor(private transferenciaService: TransferenciaService) {}

  ngOnInit(): void {
    this.carregarExtrato();
  }

  carregarExtrato() {
    this.transferenciaService.listarTransferencias().subscribe({
      next: (data) => this.transferencias = data,
      error: (err) => console.error('Erro ao carregar o extrato', err)
    });
  }
}