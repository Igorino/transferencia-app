import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-inicial',
  templateUrl: './menu-inicial.component.html',
  styleUrls: ['./menu-inicial.component.scss']
})
export class MenuInicialComponent {
  constructor(private router: Router) {}

  navegarParaAgendar() {
    this.router.navigate(['/agendar']);
  }

  navegarParaExtrato() {
    this.router.navigate(['/extrato']);
  }
}
