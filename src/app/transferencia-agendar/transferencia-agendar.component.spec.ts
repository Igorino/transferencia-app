import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferenciaAgendarComponent } from './transferencia-agendar.component';

describe('TransferenciaAgendarComponent', () => {
  let component: TransferenciaAgendarComponent;
  let fixture: ComponentFixture<TransferenciaAgendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransferenciaAgendarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferenciaAgendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
