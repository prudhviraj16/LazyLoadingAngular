import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lcom1Component } from './lcom1.component';

describe('Lcom1Component', () => {
  let component: Lcom1Component;
  let fixture: ComponentFixture<Lcom1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lcom1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lcom1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
