import { Component, OnInit } from '@angular/core';
import { TransferenciaService, Transferencia } from '../service/transferencia.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-transferencia-extrato',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    MatListModule,
    MatButtonModule,
    MatTableModule
  ],
  templateUrl: './transferencia-extrato.component.html',
  styleUrls: ['./transferencia-extrato.component.scss'],
  providers: [TransferenciaService]
})
export class TransferenciaExtratoComponent implements OnInit {
  displayedColumns: string[] = ['contaOrigem', 'contaDestino', 'valor', 'dataTransferencia', 'taxa'];
  transferencias = new MatTableDataSource<Transferencia>();

  constructor(private transferenciaService: TransferenciaService, private router: Router) {}

  ngOnInit(): void {
    this.carregarExtrato();
  }

  carregarExtrato() {
    this.transferenciaService.listarTransferencias().subscribe({
      next: (data) => this.transferencias.data = data,
      error: (err) => console.error('Erro ao carregar o extrato', err)
    });
  }

  navegarParaMenu() {
    this.router.navigate(['/']);
  }
}
