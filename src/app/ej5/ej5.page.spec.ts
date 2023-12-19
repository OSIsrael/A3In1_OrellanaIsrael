import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ej5Page } from './ej5.page';

describe('Ej5Page', () => {
  let component: Ej5Page;
  let fixture: ComponentFixture<Ej5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Ej5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
