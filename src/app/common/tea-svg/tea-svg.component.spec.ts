import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaSVGComponent } from './tea-svg.component';

describe('TeaSVGComponent', () => {
  let component: TeaSVGComponent;
  let fixture: ComponentFixture<TeaSVGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeaSVGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeaSVGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
