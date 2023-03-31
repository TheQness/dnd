import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BagofholdingComponent } from './bagofholding.component';

describe('BagofholdingComponent', () => {
  let component: BagofholdingComponent;
  let fixture: ComponentFixture<BagofholdingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BagofholdingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BagofholdingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
