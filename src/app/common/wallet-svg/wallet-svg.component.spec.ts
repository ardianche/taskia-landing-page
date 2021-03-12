import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletSVGComponent } from './wallet-svg.component';

describe('WalletSVGComponent', () => {
  let component: WalletSVGComponent;
  let fixture: ComponentFixture<WalletSVGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalletSVGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletSVGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
