import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombattrackerComponent } from './combattracker.component';

describe('CombattrackerComponent', () => {
  let component: CombattrackerComponent;
  let fixture: ComponentFixture<CombattrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombattrackerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombattrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
