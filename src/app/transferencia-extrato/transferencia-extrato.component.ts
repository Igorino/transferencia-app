import { Component, OnInit, ViewChild } from '@angular/core';
import { TransferenciaService, Transferencia } from '../service/transferencia.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-transferencia-extrato',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    MatListModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  templateUrl: './transferencia-extrato.component.html',
  styleUrls: ['./transferencia-extrato.component.scss'],
  providers: [TransferenciaService]
})
export class TransferenciaExtratoComponent implements OnInit {
  displayedColumns: string[] = ['contaOrigem', 'contaDestino', 'valor', 'dataTransferencia', 'taxa'];
  transferencias = new MatTableDataSource<Transferencia>();
  searchKey: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private transferenciaService: TransferenciaService, private router: Router) {}

  ngOnInit(): void {
    this.carregarExtrato();
  }

  carregarExtrato() {
    this.transferenciaService.listarTransferencias().subscribe({
      next: (data) => {
        this.transferencias.data = data;
        this.transferencias.paginator = this.paginator;
        this.transferencias.sort = this.sort;
      },
      error: (err) => console.error('Erro ao carregar o extrato', err)
    });
  }

  navegarParaMenu() {
    this.router.navigate(['/']);
  }

  // Método para aplicar filtro de pesquisa
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.transferencias.filter = filterValue.trim().toLowerCase();
  }
}
