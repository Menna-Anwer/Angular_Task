import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewProdutComponent } from './add-new-produt.component';

describe('AddNewProdutComponent', () => {
  let component: AddNewProdutComponent;
  let fixture: ComponentFixture<AddNewProdutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewProdutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewProdutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
