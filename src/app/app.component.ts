import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary">
      <span>{{ title }}</span>
    </mat-toolbar>
    <mat-sidenav-container>
      <mat-sidenav mode="side" opened>
        <button mat-button (click)="navegarPara('/')">Menu Inicial</button>
        <button mat-button (click)="navegarPara('/agendar')">Agendar Transferência</button>
        <button mat-button (click)="navegarPara('/extrato')">Extrato</button>
      </mat-sidenav>
      <mat-sidenav-content>
        <router-outlet></router-outlet>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    CommonModule,
    MatTableModule
  ],
  styleUrls: ['./app.component.scss'] // Adicione esta linha se o estilo estiver em um arquivo separado
})
export class AppComponent {
  title = 'Transferência App';

  constructor(private router: Router) {}

  navegarPara(caminho: string) {
    this.router.navigate([caminho]);
  }
}
