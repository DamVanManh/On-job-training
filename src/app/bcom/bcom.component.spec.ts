import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcomComponent } from './bcom.component';

describe('BcomComponent', () => {
  let component: BcomComponent;
  let fixture: ComponentFixture<BcomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BcomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
