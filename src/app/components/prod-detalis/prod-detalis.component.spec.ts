import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdDetalisComponent } from './prod-detalis.component';

describe('ProdDetalisComponent', () => {
  let component: ProdDetalisComponent;
  let fixture: ComponentFixture<ProdDetalisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdDetalisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdDetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
