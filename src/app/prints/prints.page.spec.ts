import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrintsPage } from './prints.page';

describe('PrintsPage', () => {
  let component: PrintsPage;
  let fixture: ComponentFixture<PrintsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
