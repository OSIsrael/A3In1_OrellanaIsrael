import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ej4Page } from './ej4.page';

describe('Ej4Page', () => {
  let component: Ej4Page;
  let fixture: ComponentFixture<Ej4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Ej4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
