import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WildmagicComponent } from './wildmagic.component';

describe('WildmagicComponent', () => {
  let component: WildmagicComponent;
  let fixture: ComponentFixture<WildmagicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WildmagicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WildmagicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
