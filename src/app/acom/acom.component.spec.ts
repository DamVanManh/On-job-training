import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcomComponent } from './acom.component';

describe('AcomComponent', () => {
  let component: AcomComponent;
  let fixture: ComponentFixture<AcomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
