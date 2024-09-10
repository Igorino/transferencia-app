import { Component } from '@angular/core';
import { TransferenciaService, Transferencia } from '../service/transferencia.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 


@Component({
  selector: 'app-transferencia-agendar',
  templateUrl: './transferencia-agendar.component.html',
  styleUrls: ['./transferencia-agendar.component.scss'],
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [TransferenciaService]
})
export class TransferenciaAgendarComponent {
  transferencia: Transferencia = { contaOrigem: '', contaDestino: '', valor: 0, dataTransferencia: '' };
  mensagem: string = '';

  constructor(private transferenciaService: TransferenciaService, private router: Router) {}

  agendarTransferencia() {
    this.transferenciaService.agendarTransferencia(this.transferencia).subscribe({
      next: (response: any) => this.mensagem = 'Transferência agendada com sucesso!',
      error: (err: any) => {
        if (err.error) {
          this.mensagem = 'Erro ao agendar a transferência: ' + err.error;
        } else {
          this.mensagem = 'Erro ao agendar a transferência: ' + err.message;
        }
      }
    });
  }

  navegarParaMenu() {
    this.router.navigate(['/']);
  }
}