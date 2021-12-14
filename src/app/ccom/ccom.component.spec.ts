import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcomComponent } from './ccom.component';

describe('CcomComponent', () => {
  let component: CcomComponent;
  let fixture: ComponentFixture<CcomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CcomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
