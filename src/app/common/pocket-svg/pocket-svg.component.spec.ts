import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PocketSVGComponent } from './pocket-svg.component';

describe('PocketSVGComponent', () => {
  let component: PocketSVGComponent;
  let fixture: ComponentFixture<PocketSVGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PocketSVGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PocketSVGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
