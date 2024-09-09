import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferenciaExtratoComponent } from './transferencia-extrato.component';

describe('TransferenciaExtratoComponent', () => {
  let component: TransferenciaExtratoComponent;
  let fixture: ComponentFixture<TransferenciaExtratoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransferenciaExtratoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferenciaExtratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
