import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyMotorcyclesPage } from './my-motorcycles.page';

describe('MyMotorcyclesPage', () => {
  let component: MyMotorcyclesPage;
  let fixture: ComponentFixture<MyMotorcyclesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMotorcyclesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
