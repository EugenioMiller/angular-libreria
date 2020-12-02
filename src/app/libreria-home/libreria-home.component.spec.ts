import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibreriaHomeComponent } from './libreria-home.component';

describe('LibreriaHomeComponent', () => {
  let component: LibreriaHomeComponent;
  let fixture: ComponentFixture<LibreriaHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibreriaHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibreriaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
