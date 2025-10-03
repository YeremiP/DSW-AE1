import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddMotorcyclePage } from './add-motorcycle.page';

describe('AddMotorcyclePage', () => {
  let component: AddMotorcyclePage;
  let fixture: ComponentFixture<AddMotorcyclePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMotorcyclePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
